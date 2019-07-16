import EventEmitter from 'wolfy87-eventemitter'
import WSC from 'w-websocket-client/src/WWebsocketClient.mjs'
import get from 'lodash/get'
import genPm from 'wsemi/src/genPm.mjs'
import genID from 'wsemi/src/genID.mjs'
import getdtvstr from 'wsemi/src/getdtvstr.mjs'
import j2o from 'wsemi/src/j2o.mjs'


/**
 * 建立WebSocket使用者(Node.js與Browser)端物件
 *
 * @class
 * @param {Object} opt 輸入設定參數物件
 * @param {String} [opt.url='ws://localhost:8080'] 輸入WebSocket伺服器ws網址，預設為'ws://localhost:8080'
 * @param {String} [opt.token='*'] 輸入使用者認證用token，預設為'*'
 * @returns {Object} 回傳通訊物件，可監聽事件open、bOpened、close、error、reconn、broadcast、deliver，可使用函數execute、broadcast、deliver
 * @example
 *
 * import WConverwsClient from 'w-converws/dist/w-converws-client.umd.js'
 *
 * let opt = {
 *     url: 'ws://localhost:8080',
 *     token: '*',
 * }
 *
 * //new
 * let wo = new WConverwsClient(opt)
 *
 * wo.on('open', function() {
 *     console.log('client nodejs[port:8080]: open')
 * })
 * wo.on('bOpened', function() {
 *     console.log('client nodejs[port:8080]: bOpened')
 *
 *     //execute
 *     wo.execute('add', { p1: 1, p2: 2 })
 *         .then(function(r) {
 *             console.log('execute: add', r)
 *         })
 *
 *     //broadcast
 *     wo.broadcast('broadcast: hi')
 *
 * })
 * wo.on('close', function() {
 *     console.log('client nodejs[port:8080]: close')
 * })
 * wo.on('error', function(err) {
 *     console.log('client nodejs[port:8080]: error', err)
 * })
 * wo.on('reconn', function() {
 *     console.log('client nodejs[port:8080]: reconn')
 * })
 * wo.on('broadcast', function(data) {
 *     console.log('client nodejs[port:8080]: broadcast', data)
 * })
 * wo.on('deliver', function(data) {
 *     console.log('client nodejs[port:8080]: deliver', data)
 * })
 *
 */
function WConverwsClient(opt) {
    let bOpened = false //WebSocket是否第一次開啟
    let msgs = {} //訊息佇列
    let wsc = null //WebSocket


    //ee
    let ee = new EventEmitter()


    //eeEmit
    function eeEmit(name, ...args) {
        setTimeout(() => {
            ee.emit(name, ...args)
        }, 1)
    }


    function core() {


        //default
        if (!opt.url) {
            opt.url = 'ws://localhost:8080'
        }
        if (!opt.token) {
            opt.token = '*'
        }


        //optt
        let optt = {
            url: opt.url,
            token: opt.token,
            open: function() {
                open()
                openOnce()
            },
            close: function() {
                close()
            },
            message: function(data) {
                message(data)
            },
            error: function(err) {
                error(err)
            },
        }


        //WebSocket, 網址傳token參數作為識別使用者
        try {
            wsc = new WSC(optt)
        }
        catch (err) {
            eeEmit('error', { msg: 'can not create websocket', err: err })
            reconn()
        }


        /**
         * WebSocket開啟事件
         *
         * @memberof WConverwsClient
         * @example
         * wo.on('open', function() {
         *     ...
         * })
         */
        function open() {
            eeEmit('open')
        }


        /**
         * WebSocket第一次開啟事件
         *
         * @memberof WConverwsClient
         * @example
         * wo.on('openOnce', function() {
         *     ...
         * })
         */
        function openOnce() {
            if (!bOpened) {
                eeEmit('openOnce')
                bOpened = true
            }
        }


        /**
         * WebSocket關閉事件
         *
         * @memberof WConverwsClient
         * @example
         * wo.on('close', function() {
         *     ...
         * })
         */
        function close() {
            eeEmit('close')
            reconn()
        }


        /**
         * WebSocket錯誤事件
         *
         * @memberof WConverwsClient
         * @param {*} err 接收錯誤訊息
         * @example
         * wo.on('error', function(err) {
         *     ...
         * })
         */
        function error(err) {
            eeEmit('error', { msg: 'websocket error', err: err })
            wsc.close()
        }


        function message(message) {
            //console.log('message', message)

            //data
            let data = j2o(message)

            //parserData
            parserData(data)

        }


        function parserData(data) {

            //_mode
            let _mode = getdtvstr(data, '_mode')

            //emit
            if (_mode === 'execute') {

                if (get(data, '_id') && get(data, 'output')) {

                    //_id
                    let _id = get(data, '_id')

                    //save msgs
                    msgs[_id] = data

                }
                else {
                    //無效資料

                    eeEmit('error', { msg: 'can not find _id and output in data', err: data })

                }

            }
            else if (_mode === 'broadcast') {

                //broadcast 廣播
                eeEmit('broadcast', get(data, 'data'))

            }
            else if (_mode === 'deliver') {

                //deliver 交付
                eeEmit('deliver', get(data, 'data'))

            }
            else {
                error({ msg: 'can not find _mode in data', err: data })
            }

        }


        function sendData(data) {
            if (wsc.readyState === wsc.OPEN) {
                wsc.send(JSON.stringify(data), function(err) {
                    if (err) {
                        eeEmit('error', { msg: 'can not send message', err: err })
                    }
                })
            }
        }


        function triggerExecute(func, input = null, callback) {

            //_id
            let _id = genID()

            //msg
            let msg = {
                _mode: 'execute',
                _id: _id,
                func: func,
                input: input,
            }

            //add msgs
            msgs[_id] = null

            //sendData
            sendData(msg)

            //等待結果回傳
            let t = setInterval(function() {
                if (msgs[_id] !== null) {

                    //output
                    let output = get(msgs[_id], 'output')

                    //delete msgs
                    delete msgs[_id]

                    //callback
                    callback(output)

                    //clearInterval
                    clearInterval(t)

                }
            }, 1000)

        }


        function triggerBroadcast(data) {

            //msg
            let msg = {
                _mode: 'broadcast',
                data: data,
            }

            //sendData
            sendData(msg)

        }


        function triggerDeliver(data) {

            //msg
            let msg = {
                _mode: 'deliver',
                data: data,
            }

            //sendData
            sendData(msg)

        }


        //triggerExecute, 若斷線重連則需自動清除過去監聽事件
        ee.removeAllListeners('triggerExecute')
        ee.on('triggerExecute', triggerExecute)


        //triggerBroadcast, 若斷線重連則需自動清除過去監聽事件
        ee.removeAllListeners('triggerBroadcast')
        ee.on('triggerBroadcast', triggerBroadcast)


        //triggerDeliver, 若斷線重連則需自動清除過去監聽事件
        ee.removeAllListeners('triggerDeliver')
        ee.on('triggerDeliver', triggerDeliver)


    }


    /**
     * WebSocket監聽客戶端廣播事件
     *
     * @memberof WConverwsClient
     * @param {*} data 傳入廣播訊息
     * @example
     * wo.on('broadcast', function(data) {
     *     ...
     * })
     */
    function broadcast() {}
    broadcast()


    /**
     * WebSocket通訊物件對伺服器端執行函數，表示傳送資料給伺服器，並請伺服器執行函數
     *
     * @memberof WConverwsClient
     * @param {String} func 輸入執行函數之名稱字串
     * @param {*} [input=null] 輸入執行函數之輸入資訊
     * @example
     * let func = 'NameOfFunction'
     * let input = {...}
     * wo.execute(func, input)
     */
    ee.execute = function (func, input) {
        let pm = genPm()
        eeEmit('triggerExecute', func, input, function(output) {
            pm.resolve(output)
        })
        return pm
    }


    /**
     * WebSocket通訊物件對伺服器端廣播函數，表示傳送資料給伺服器，還需轉送其他客戶端
     *
     * @memberof WConverwsClient
     * @param {*} data 輸入廣播函數之輸入資訊
     * @example
     * let data = {...}
     * wo.broadcast(data)
     */
    ee.broadcast = function (data) {
        eeEmit('triggerBroadcast', data)
    }


    /**
     * WebSocket通訊物件對伺服器端交付函數，表示僅傳送資料給伺服器
     *
     * @memberof WConverwsClient
     * @param {*} data 輸入廣播函數之輸入資訊
     * @example
     * let data = {...}
     * wo.deliver(data)
     */
    ee.deliver = function (data) {
        eeEmit('triggerDeliver', data)
    }


    /**
     * WebSocket重連事件
     *
     * @memberof WConverwsClient
     * @example
     * wo.on('reconn', function() {
     *     ...
     * })
     */
    function reconn() {
        setTimeout(function() {
            eeEmit('reconn')
            core()
        }, 1000)
    }


    //core
    core()


    return ee
}


export default WConverwsClient

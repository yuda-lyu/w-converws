import WSC from 'w-websocket-client/src/WWebsocketClient.mjs'
import get from 'lodash-es/get.js'
import genPm from 'wsemi/src/genPm.mjs'
import genID from 'wsemi/src/genID.mjs'
import Evem from 'wsemi/src/evem.mjs'
import sendSplitData from './sendSplitData.mjs'
import mergeSplitData from './mergeSplitData.mjs'


/**
 * 建立WebSocket使用者(Node.js與Browser)端物件
 *
 * @class
 * @param {Object} opt 輸入設定參數物件
 * @param {String} [opt.url='ws://localhost:8080'] 輸入WebSocket伺服器ws網址，預設為'ws://localhost:8080'
 * @param {String} [opt.token='*'] 輸入使用者認證用token，預設為'*'
 * @param {Integer} [opt.strSplitLength=1000000] 輸入傳輸封包長度整數，預設為1000000
 * @returns {Object} 回傳通訊物件，可監聽事件open、openOnce、close、error、reconn、broadcast、deliver，可使用函數execute、broadcast、deliver
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
 *     console.log('client nodejs: open')
 * })
 * wo.on('openOnce', function() {
 *     console.log('client nodejs: openOnce')
 *
 *     //execute
 *     wo.execute('add', { p1: 1, p2: 2 },
 *         function (prog) {
 *             console.log('client nodejs: execute prog=', prog)
 *         })
 *         .then(function(r) {
 *             console.log('client nodejs: execute: add=', r)
 *         })
 *
 *     //broadcast
 *     wo.broadcast('client nodejs broadcast hi', function (prog) {
 *         console.log('client nodejs: broadcast prog=', prog)
 *     })
 *
 *     //deliver
 *     wo.deliver('client deliver hi', function (prog) {
 *         console.log('client nodejs: deliver prog=', prog)
 *     })
 *
 * })
 * wo.on('close', function() {
 *     console.log('client nodejs: close')
 * })
 * wo.on('error', function(err) {
 *     console.log('client nodejs: error=', err)
 * })
 * wo.on('reconn', function() {
 *     console.log('client nodejs: reconn')
 * })
 * wo.on('broadcast', function(data) {
 *     console.log('client nodejs: broadcast=', data)
 * })
 * // wo.on('deliver', function(data) { //伺服器目前無法針對client直接deliver
 * //     console.log('client nodejs: deliver=', data)
 * // })
 *
 */
function WConverwsClient(opt) {
    let bOpened = false //WebSocket是否第一次開啟
    let wsc = null //WebSocket


    //ee, ev
    let ee = new Evem()
    let ev = new Evem()


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
        if (!opt.strSplitLength) {
            opt.strSplitLength = 1000000
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
            eeEmit('error', { msg: 'can not create websocket', err })
            reconn()
            return
        }


        //check
        if (get(wsc, 'error')) {
            eeEmit('error', { msg: 'can not create websocket', err: 'can not new MixWS in WWebsocketClient' })
            reconn()
            return
        }


        /**
         * WebSocket監聽開啟事件
         *
         * @memberof WConverwsClient
         * @example
         * wo.on('open', function() {
         *     ...
         * })
         */
        function onOpen() {} onOpen()
        function open() {
            eeEmit('open')
        }


        /**
         * WebSocket監聽第一次開啟事件
         *
         * @memberof WConverwsClient
         * @example
         * wo.on('openOnce', function() {
         *     ...
         * })
         */
        function onOpenOnce() {} onOpenOnce()
        function openOnce() {
            if (!bOpened) {
                eeEmit('openOnce')
                bOpened = true
            }
        }


        /**
         * WebSocket監聽關閉事件
         *
         * @memberof WConverwsClient
         * @example
         * wo.on('close', function() {
         *     ...
         * })
         */
        function onClose() {} onClose()
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
        function onError() {} onError()
        function error(err) {
            eeEmit('error', { msg: 'websocket error', err })
            wsc.close()
        }


        function message(message) {
            //console.log('message', message)

            //mergeSplitData
            mergeSplitData(message, parserData)

        }


        function parserData(data) {

            //_mode
            let _mode = get(data, '_mode', '')

            //emit
            if (_mode === 'execute') {

                if (get(data, '_id') && get(data, 'output')) {

                    //_id
                    let _id = get(data, '_id')

                    //output
                    let output = get(data, 'output')

                    //emit
                    ev.emit(_id, output)

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


        function sendData(data, cbProgress) {
            if (wsc.readyState === wsc.OPEN) {

                //sendSplitData
                sendSplitData(wsc, opt.strSplitLength, data, cbProgress, function (err) {
                    eeEmit('error', { msg: 'can not send message', err })
                })

            }
        }


        function triggerExecute(func, input = null, cbResult, cbProgress) {

            //_id
            let _id = genID()

            //msg
            let msg = {
                _mode: 'execute',
                _id,
                func,
                input,
            }

            //sendData
            sendData(msg, cbProgress)

            //等待結果回傳
            ev.on(_id, function (output) {

                //cbResult
                cbResult(output)

                //removeAllListeners
                ev.removeAllListeners(_id)

            })

        }


        function triggerBroadcast(data, cbProgress) {

            //msg
            let msg = {
                _mode: 'broadcast',
                data,
            }

            //sendData
            sendData(msg, cbProgress)

        }


        function triggerDeliver(data, cbProgress) {

            //msg
            let msg = {
                _mode: 'deliver',
                data,
            }

            //sendData
            sendData(msg, cbProgress)

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
     * WebSocket監聽伺服器端廣播事件
     *
     * @memberof WConverwsClient
     * @param {*} data 傳入廣播訊息
     * @example
     * wo.on('broadcast', function(data) {
     *     ...
     * })
     */
    function onBroadcast() {} onBroadcast()


    /**
     * WebSocket監聽伺服器端交付事件
     *
     * @memberof WConverwsClient
     * @param {*} data 傳入交付訊息
     * @example
     * wo.on('deliver', function(data) {
        *     ...
        * })
        */
    function onDeliver() {} onDeliver()


    /**
     * WebSocket通訊物件對伺服器端執行函數，表示傳送資料給伺服器，並請伺服器執行函數
     *
     * @memberof WConverwsClient
     * @function execute
     * @param {String} func 輸入執行函數之名稱字串
     * @param {*} [input=null] 輸入執行函數之輸入資訊
     * @example
     * let func = 'NameOfFunction'
     * let input = {...}
     * wo.execute(func, input)
     */
    ee.execute = function (func, input, cbProgress = function () {}) {
        let pm = genPm()
        eeEmit('triggerExecute', func, input,
            function(output) { //結果用promise回傳
                pm.resolve(output)
            },
            cbProgress //傳輸進度用cb回傳
        )
        return pm
    }


    /**
     * WebSocket通訊物件對伺服器端廣播函數，表示傳送資料給伺服器，還需轉送其他客戶端
     *
     * @memberof WConverwsClient
     * @function broadcast
     * @param {*} data 輸入廣播函數之輸入資訊
     * @example
     * let data = {...}
     * wo.broadcast(data)
     */
    ee.broadcast = function (data, cbProgress = function () {}) {
        eeEmit('triggerBroadcast', data, cbProgress)
    }


    /**
     * WebSocket通訊物件對伺服器端交付函數，表示僅傳送資料給伺服器
     *
     * @memberof WConverwsClient
     * @function deliver
     * @param {*} data 輸入廣播函數之輸入資訊
     * @example
     * let data = {...}
     * wo.deliver(data)
     */
    ee.deliver = function (data, cbProgress = function () {}) {
        eeEmit('triggerDeliver', data, cbProgress)
    }


    /**
     * WebSocket監聽重連事件
     *
     * @memberof WConverwsClient
     * @example
     * wo.on('reconn', function() {
     *     ...
     * })
     */
    function onReconn() {} onReconn()
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

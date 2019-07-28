import WebSocket from 'ws'
import events from 'events'
import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import genPm from 'wsemi/src/genPm.mjs'
import urlParse from 'wsemi/src/urlParse.mjs'
import getdtvstr from 'wsemi/src/getdtvstr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import obj2str from 'wsemi/src/obj2str.mjs'
import str2obj from 'wsemi/src/str2obj.mjs'


/**
 * 建立WebSocket伺服器
 *
 * @class
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {Integer} [opt.port=8080] 輸入WebSocket伺服器所在port，預設8080
 * @param {Function} opt.authenticate 輸入使用者身份認證函數，供伺服器端驗證之用，函數會傳入使用者端連線之token參數，回傳為Promise，resolve(true)為驗證通過，resolve(false)為驗證不通過
 * @returns {Object} 回傳通訊物件，可監聽事件open、error、clientChange、execute、broadcast、deliver，可使用函數broadcast
 * @example
 *
 * import WConverwsServer from 'w-converws/dist/w-converws-server.umd.js'
 *
 * let opt = {
 *     port: 8080,
 *     authenticate: function(token) {
 *         //使用token驗證使用者身份
 *         return new Promise(function(resolve, reject) {
 *             setTimeout(function() {
 *                 resolve(true)
 *             }, 1000)
 *         })
 *     },
 * }
 *
 * //new
 * let wo = new WConverwsServer(opt)
 *
 * wo.on('open', function() {
 *     console.log(`Server running at: ws://localhost:${opt.port}`)
 *
 *     //broadcast
 *     setTimeout(() => {
 *         wo.broadcast(`server: broadcast: hi`)
 *     }, 5000)
 *
 * })
 * wo.on('error', function(err) {
 *     console.log(`Server[port:${opt.port}]: error`, err)
 * })
 * wo.on('clientChange', function(clients) {
 *     console.log(`Server[port:${opt.port}]: now clients: ${clients.length}`)
 * })
 * wo.on('execute', function(func, input, callback, sendData) {
 *     console.log(`Server[port:${opt.port}]: execute`, func, input)
 *
 *     if (func === 'add') {
 *         let r = input.p1 + input.p2
 *         callback(r)
 *     }
 *
 * })
 * wo.on('broadcast', function(data) {
    *     console.log(`Server[port:${opt.port}]: broadcast`, data)
    * })
 * wo.on('deliver', function(data) {
 *     console.log(`Server[port:${opt.port}]: deliver`, data)
 * })
 *
 */
function WConverwsServer(opt = {}) {


    //cloneDeep
    opt = cloneDeep(opt)


    //default
    if (!opt.port) {
        opt.port = 8080
    }

    //ee
    let ee = new events.EventEmitter()


    //eeEmit
    function eeEmit(name, ...args) {
        setTimeout(() => {
            ee.emit(name, ...args)
        }, 1)
    }


    //WebSocketServer
    let WebSocketServer = WebSocket.Server


    //authenticate
    function authenticate(token) {
        let pm = genPm()
        if (isfun(opt.authenticate)) {
            opt.authenticate(token)
                .then(function(vd) {
                    pm.resolve(vd)
                })
        }
        else {
            pm.resolve(true)
        }
        return pm
    }


    //serverSettings
    let serverSettings = {
        port: opt.port,
        verifyClient: function(info, done) {

            //data
            let data = urlParse(info.req.url)

            //token
            let token = getdtvstr(data, 'token')

            //vd
            authenticate(token)
                .then(function(vd) {

                    //done callback
                    done(vd)

                })
                //不使用catch, 因沒有reject

        }
    }


    //wss
    let wss = null
    try {
        wss = new WebSocketServer(serverSettings)
    }
    catch (err) {
        error({ msg: 'can not create websocket', err: err })
    }


    //check
    if (!wss) {
        return ee
    }


    /**
     * WebSocket監聽開啟事件
     *
     * @memberof WConverwsServer
     * @example
     * wo.on('open', function() {
     *     ...
     * })
     */
    function onOpen() {} onOpen()
    function open() {
        eeEmit('open')
    }
    open()


    /**
     * WebSocket監聽錯誤事件
     *
     * @memberof WConverwsServer
     * @param {*} err 傳入錯誤訊息
     * @example
     * wo.on('error', function(err) {
     *     ...
     * })
     */
    function onError() {} onError()
    function error(err) {
        eeEmit('error', err)
    }


    /**
     * WebSocket監聽客戶端變更(上下線)事件
     *
     * @memberof WConverwsServer
     * @param {Array} clients 傳入Websocket客戶端物件陣列
     * @example
     * wo.on('clientChange', function(clients) {
     *     ...
     * })
     */
    function onClientChange() {} onClientChange()
    function clientChange() {
        eeEmit('clientChange', clients)
    }


    //connection
    let clients = []
    wss.on('connection', function(wsc, req) {
        //console.log('connection', wsc)
        //console.log('connection', req.connection.remoteAddress)


        //client connected
        clients.push(wsc)
        clientChange()


        //client close
        wsc.on('close', function () {

            //刪除ws
            clients = clients.filter(function(wst) {
                return wst !== wsc
            })
            clientChange()

        })


        function sendData(data) {
            //console.log('sendData', data)
            if (wsc.readyState === WebSocket.OPEN) {
                wsc.send(obj2str(data), function(err) {
                    if (err) {
                        error({ msg: 'can not send message', err: err })
                    }
                })
            }
        }


        //bind for execute
        wsc.sendData = sendData


        function parserData(data) {
            //console.log('parserData', data)

            //_mode
            let _mode = getdtvstr(data, '_mode')

            //callback
            function callback(output) {

                //add output
                data['output'] = output

                //sendData
                sendData(data)

            }

            //emit
            if (_mode === 'execute') {

                //func
                let func = getdtvstr(data, 'func')

                //input
                let input = get(data, 'input')

                //execute 執行
                eeEmit('execute', func, input, callback, sendData)

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


        function message(message) {
            //console.log('message', message)

            //data
            let data = str2obj(message)

            //parserData
            parserData(data)

        }
        wsc.on('message', message)


        function triggerBroadcast(data) {

            //msg
            let msg = {
                _mode: 'broadcast',
                data: data,
            }

            //sendData
            sendData(msg)

        }


        //需封裝單一傳輸send給外面用


        //triggerBroadcast, 需對全部客戶端廣播, 不能清除過去監聽事件
        ee.on('triggerBroadcast', triggerBroadcast)


    })


    /**
     * WebSocket監聽客戶端執行事件
     *
     * @memberof WConverwsServer
     * @param {String} func 傳入執行函數名稱字串
     * @param {*} input 傳入執行函數之輸入數據
     * @param {Function} callback 傳入執行函數之回調函數
     * @param {Function} sendData 傳入執行函數之強制回傳函數，提供傳送任意訊息給客戶端，供由服器多次回傳數據之用
     * @example
     * wo.on('execute', function(func, input, callback, sendData) {
     *     ...
     * })
     */
    function onExecute() {} onExecute()


    /**
     * WebSocket監聽客戶端廣播事件
     *
     * @memberof WConverwsServer
     * @param {*} data 傳入廣播訊息
     * @example
     * wo.on('broadcast', function(data) {
     *     ...
     * })
     */
    function onBroadcast() {} onBroadcast()


    /**
     * WebSocket監聽客戶端交付事件
     *
     * @memberof WConverwsServer
     * @param {*} data 傳入交付訊息
     * @example
     * wo.on('deliver', function(data) {
     *     ...
     * })
     */
    function onDeliver() {} onDeliver()


    /**
     * WebSocket通訊物件對客戶端廣播函數
     *
     * @memberof WConverwsServer
     * @function broadcast
     * @param {*} data 輸入廣播函數之輸入資訊
     * @example
     * let data = {...}
     * wo.broadcast(data)
     */
    ee.broadcast = function (data) {
        eeEmit('triggerBroadcast', data)
    }


    return ee
}


export default WConverwsServer

import WebSocket, { WebSocketServer } from 'ws'
import get from 'lodash-es/get.js'
// import genPm from 'wsemi/src/genPm.mjs'
// import urlParse from 'wsemi/src/urlParse.mjs'
import evem from 'wsemi/src/evem.mjs'
import sendSplitData from './sendSplitData.mjs'
import mergeSplitData from './mergeSplitData.mjs'


/**
 * 建立WebSocket伺服器
 *
 * @class
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {Integer} [opt.port=8080] 輸入WebSocket伺服器所在port，預設8080
 * @param {Integer} [opt.strSplitLength=1000000] 輸入傳輸封包長度整數，預設為1000000
 * @returns {Object} 回傳通訊物件，可監聽事件open、error、clientChange、execute、broadcast、deliver，可使用函數broadcast
 * @example
 *
 * import WConverwsServer from 'w-converws/dist/w-converws-server.umd.js'
 *
 * let opt = {
 *     port: 8080,
 * }
 *
 * //new
 * let wo = new WConverwsServer(opt)
 *
 * wo.on('open', function() {
 *     console.log(`Server[port:${opt.port}]: open`)
 *
 *     //broadcast
 *     // let n = 0
 *     // setInterval(() => {
 *     //     n += 1
 *     //     let o = {
 *     //         text: `server broadcast hi(${n})`,
 *     //         data: new Uint8Array([66, 97, 115]), //support Uint8Array data
 *     //     }
 *     //     wo.broadcast(o, function (prog) {
 *     //         console.log('broadcast prog', prog)
 *     //     })
 *     // }, 1000)
 *
 * })
 * wo.on('error', function(err) {
 *     console.log(`Server[port:${opt.port}]: error`, err)
 * })
 * wo.on('clientChange', function(clients) {
 *     console.log(`Server[port:${opt.port}]: now clients: ${clients.length}`)
 * })
 * wo.on('execute', function(func, input, callback) {
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


    //default
    if (!opt.port) {
        opt.port = 8080
    }
    if (!opt.strSplitLength) {
        opt.strSplitLength = 1000000
    }


    //ee
    let ee = evem()


    //eeEmit
    function eeEmit(name, ...args) {
        setTimeout(() => {
            ee.emit(name, ...args)
        }, 1)
    }


    //serverSettings
    let serverSettings = {
        port: opt.port,
        perMessageDeflate: {
            zlibDeflateOptions: {
                // See zlib defaults.
                chunkSize: 1024,
                memLevel: 7,
                level: 3
            },
            zlibInflateOptions: {
                chunkSize: 10 * 1024
            },
            // Other options settable:
            clientNoContextTakeover: true, // Defaults to negotiated value.
            serverNoContextTakeover: true, // Defaults to negotiated value.
            serverMaxWindowBits: 10, // Defaults to negotiated value.
            // Below options specified as default values.
            concurrencyLimit: 10, // Limits zlib concurrency for perf.
            threshold: 1024 // Size (in bytes) below which messages
            // should not be compressed if context takeover is disabled.
        },
    }


    //wss
    let wss = null
    try {
        wss = new WebSocketServer(serverSettings)
    }
    catch (err) {
        error({ msg: 'can not create websocket', err })
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


        function sendData(data, cbProgress) {
            //console.log('sendData', data)
            if (wsc.readyState === WebSocket.OPEN) {

                //sendSplitData
                sendSplitData(wsc, opt.strSplitLength, data, cbProgress, function (err) {
                    error({ msg: 'can not send message', err })
                })

            }
        }


        //bind for execute
        wsc.sendData = sendData


        function parserData(data) {
            //console.log('parserData', data)

            //_mode
            let _mode = get(data, '_mode', '')

            //cbResult for execute
            function cbResult(output) {

                //add output
                data['output'] = output

                //delete input, 因input可能很大故回傳數據不包含原input
                delete data['input']

                //sendData
                sendData(data, null) //回傳執行結果就不處理進度回調

            }

            //emit
            if (_mode === 'execute') {

                //func
                let func = get(data, 'func', '')

                //input
                let input = get(data, 'input')

                //execute 執行
                eeEmit('execute', func, input, cbResult, sendData)

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

            //mergeSplitData
            mergeSplitData(message, parserData)

        }
        wsc.on('message', message)


        function triggerBroadcast(data, cbProgress) {

            //msg
            let msg = {
                _mode: 'broadcast',
                data,
            }

            //sendData
            sendData(msg, cbProgress)

        }


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
    ee.broadcast = function (data, cbProgress = function () {}) {
        eeEmit('triggerBroadcast', data, cbProgress)
    }


    return ee
}


export default WConverwsServer

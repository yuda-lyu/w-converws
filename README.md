# w-converws
An operator for websocket in nodejs and browser.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-converws.svg?style=flat)](https://npmjs.org/package/w-converws) 
[![Build Status](https://travis-ci.org/yuda-lyu/w-converws.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-converws) 
[![license](https://img.shields.io/npm/l/w-converws.svg?style=flat)](https://npmjs.org/package/w-converws) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-converws/master/dist/w-converws-server.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-converws)
[![npm download](https://img.shields.io/npm/dt/w-converws.svg)](https://npmjs.org/package/w-converws) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-converws.svg)](https://www.jsdelivr.com/package/npm/w-converws)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-converws/WConverwsServer.html).

## Parts
`w-converws` includes 2 parts: 
* `w-converws-server`: for nodejs server
* `w-converws-client`: for nodejs and browser client

## Installation
### Using npm(ES6 module):
> **Note:** `w-converws-server` depends on `ws` and `events`, `w-converws-client` depends on `w-websocket-client` and `wolfy87-eventemitter`.
```alias
npm i w-converws
```
#### Example for w-converws-server:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-converws/blob/master/srv.mjs)]
```alias
import WConverwsServer from 'w-converws/dist/w-converws-server.umd.js'

let opt = {
    port: 8080,
    authenticate: async function(token) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(true)
            }, 1000)
        })
    },
}

//new
let wo = new WConverwsServer(opt)

wo.on('open', function() {
    console.log(`Server running at: ws://localhost:${opt.port}`)

    let n = 0
    setInterval(() => {
        n += 1

        //broadcast
        wo.broadcast(`server: broadcast: hi(${n})`)

    }, 1000)

})
wo.on('error', function(err) {
    console.log(`Server[port:${opt.port}]: error`, err)
})
wo.on('clientChange', function(clients) {
    console.log(`Server[port:${opt.port}]: now clients: ${clients.length}`)
})
wo.on('execute', function(func, input, callback) {
    console.log(`Server[port:${opt.port}]: execute`, func, input)

    if (func === 'add') {
        let r = input.p1 + input.p2
        callback(r)
    }

})
wo.on('broadcast', function(data) {
    console.log(`Server[port:${opt.port}]: broadcast`, data)
})
wo.on('deliver', function(data) {
    console.log(`Server[port:${opt.port}]: deliver`, data)
})

// Server running at: ws://localhost:8080
// Server[port:8080]: now clients: 1
// Server[port:8080]: execute add { p1: 1, p2: 2 }
// Server[port:8080]: broadcast client nodejs[port:8080]: broadcast: hi
// Server[port:8080]: now clients: 2
// Server[port:8080]: execute add { p1: 1, p2: 2 }
// Server[port:8080]: broadcast client web: broadcast: hi
```
#### Example for w-converws-client:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-converws/blob/master/scla.mjs)]
```alias
import WConverwsClient from 'w-converws/dist/w-converws-client.umd.js'

let opt = {
    url: 'ws://localhost:8080',
    token: '*',
}

//new
let wo = new WConverwsClient(opt)

wo.on('open', function() {
    console.log('client nodejs[port:8080]: open')
})
wo.on('openOnce', function() {
    console.log('client nodejs[port:8080]: openOnce')

    //execute
    wo.execute('add', { p1: 1, p2: 2 })
        .then(function(r) {
            console.log('execute: add', r)
        })

    //broadcast
    setTimeout(() => {
        wo.broadcast(`server: broadcast: hi`)
    }, 5000)

})
wo.on('close', function() {
    console.log('client nodejs[port:8080]: close')
})
wo.on('error', function(err) {
    console.log('client nodejs[port:8080]: error', err)
})
wo.on('reconn', function() {
    console.log('client nodejs[port:8080]: reconn')
})
wo.on('broadcast', function(data) {
    console.log('client nodejs[port:8080]: broadcast', data)
})
wo.on('deliver', function(data) {
    console.log('client nodejs[port:8080]: deliver', data)
})

// client nodejs[port:8080]: open
// client nodejs[port:8080]: openOnce
// execute: add 3
// client nodejs[port:8080]: broadcast server: broadcast: hi
```

### In a browser(UMD module):
> **Note:** `w-converws-client` does't depend on any package.

[Necessary] Add script for w-converws-client.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-converws@1.0.2/dist/w-converws-client.umd.js"></script>
```
#### Example for w-converws-client:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-converws/blob/master/web.html)]
```alias
let opt = {
    url: 'ws://localhost:8080',
    token: '*',
}

//new
let WConverwsClient=window['w-converws-client']
let wo = new WConverwsClient(opt)

wo.on('open', function() {
    console.log('client web: open')
})
wo.on('openOnce', function() {
    console.log('client web: openOnce')

    //execute
    wo.execute('add', { p1: 1, p2: 2 })
        .then(function(r) {
            console.log('execute: add', r)
        })

    //broadcast
    wo.broadcast('client web: broadcast: hi')

})
wo.on('close', function() {
    console.log('client web: close')
})
wo.on('error', function(err) {
    console.log('client web: error', err)
})
wo.on('reconn', function() {
    console.log('client web: reconn')
})
wo.on('broadcast', function(data) {
    console.log('client web: broadcast', data)
})
wo.on('deliver', function(data) {
    console.log('client web: deliver', data)
})

// client web: open
// client web: openOnce
// execute: add 3
// client web: broadcast server: broadcast: hi
```
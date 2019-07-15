import WConverwsClient from './src/WConverwsClient.mjs'
//import WConverwsClient from './dist/w-converws-client.umd.js'

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
    wo.broadcast('client nodejs[port:8080]: broadcast: hi')

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

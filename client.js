const net = require('net')

const client = net.createConnection({
    host: 'localhost',
    port: 4567
})

client.setEncoding('utf8')

process.stdin.on('data', data => client.write(data))

client.on('data', message => console.log(message))

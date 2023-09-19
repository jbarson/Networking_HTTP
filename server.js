const net = require('net')

const PORT = 4567

const server = net.createServer()

const connnections = []

server.on("connection", connection => {
    console.log("connected!")
    connection.write('hello nurse')
    connnections.push(connection)
    connection.setEncoding("utf8")
    connection.on("data", messageFromClient => {
        console.log('client says ', messageFromClient)
    })
})

server.listen(PORT, () => console.log(`running up that hill on ${PORT}`))

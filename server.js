const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})

io.on('connection', (socket) => {
  socket.on('msg', msg => {
    socket.broadcast.emit('msg', msg)
  })
})

http.listen(3000, () => {
  console.log('Aberto na porta 3000')
})
import express from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'
import { Socket } from 'socket.io-client'

const app = express()
const server = createServer(app)
const io = new Server(server,{
    cors:{origin:"*"}
})


io.on('connection',(socket)=>{
    socket.emit('getmessg','This is good')
})

server.listen(3000,()=> console.log('Server is running at 3000'))

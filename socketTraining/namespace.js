import express from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server,{
    cors: {origin: '*'}
})

io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
        socket.emit('message',msg+' are not in chat')
    })
    socket.on('disconnect',()=>{
        console.log(socket.id, 'is disconnected from server')
    })
})


//localhost:3000/chat
const chatNamespace = io.of('/chat');


chatNamespace.use((socket,next)=>{
    const token = socket.handshake.auth.token;
    if(token ==  'mysecrettoken')
    {
        next(); //allow for connection
    }
    else{
        console.log('unauthorized',socket.id)
        next(new Error('unauthorized')) //reject connection
    }
})

chatNamespace.on('connection',(socket)=>{
    console.log(socket.id,'is connected to server')

    socket.on('message',(msg)=>{
        chatNamespace.emit('message',msg+' are in chat space')
    })
    socket.on('disconnect',()=>{
        console.log(socket.id, 'is disconnected from server')
    })
})

server.listen(3000,()=> console.log('Server is running at 3000'))
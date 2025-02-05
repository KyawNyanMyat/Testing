import express from 'express'
import {createServer} from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server,{
  cors:{origin:"*"}
})

io.on("connection", (socket)=>{
  console.log('A user connected', socket.id);
  
  socket.on('clientMessage',(data)=>{
    console.log(`Client id ${socket.id} =>`,data)
  })
  
  socket.emit('myservermessg',"This is from server kk")
  
  
  socket.on('disconnect',()=>{
    console.log('User disconnected', socket.id)
  })
})

server.listen(3000,()=> console.log('Listening at 3000'))
import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server,{
  cors:{origin:'*'}
})


io.on('connection',(socket)=>{
  console.log("\nUser connected",socket.id)
  
  socket.on('privatemessg',({receiverId, message})=>{
    console.log(`Message from ${socket.id} to ${receiverId} : ${message}`);
    
    io.to(receiverId).emit('receivemessg',{
      senderId: socket.id,
      message
    })
  })
  
  socket.on('disconnect',()=>{
    console.log('User disconnected',socket.id)
  })
})

server.listen(3000,()=> console.log('Server is running at 3000'))

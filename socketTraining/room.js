import express from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server,{
    cors:{origin:"*"}
})


const roomUsers = {}

io.on('connection',(socket)=>{
    console.log('User connected\n', socket.id)

    socket.on('joinroom',(roomName)=>{
        socket.join(roomName)
        console.log(`${socket.id} is connected to room ${roomName}`)

        //Add users to roomUsers
        if(!roomUsers[roomName]) // if !undefined , then it became true
        {
            roomUsers[roomName] = []
        }
        roomUsers[roomName].push({id:socket.id})
        
        //Doesn't broadcast to all
        //socket.emit('yourRoomIdandMembers',{roomName, ...roomUsers})

        //broatcast to all
        io.to(roomName).emit('yourRoomIdandMembers',{roomName, ...roomUsers})
    })

    socket.on('sendMessage',({roomName, message})=>{
        io.to(roomName).emit('receiveMessage', message)
    })


    //leave room
    socket.on('leaveroom',(roomName)=>{
        roomUsers[roomName] = roomUsers[roomName]?.filter((user)=> user.id !== socket.id)
        io.to(roomName).emit('yourRoomIdandMembers',{roomName, ...roomUsers})
        socket.leave(roomName)
    })



    socket.on('disconnect',()=> {
        for(const room in roomUsers){
            roomUsers[room] = roomUsers[room]?.filter((user)=> user.id !== socket.id)
            io.to(room).emit('yourRoomIdandMembers',{room, ...roomUsers})
        }
        console.log(`${socket.id} is disconnected`)
    })
})

server.listen(3000,()=> console.log('Server is running at 3000'))
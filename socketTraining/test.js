import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Custom namespace "/chat"
const chatNamespace = io.of("/chat");

chatNamespace.on("connection", (socket) => {
  const now = Date.now()
  console.log(`User connected to /chat: ${socket.id}`);

  socket.on("joinRoom", (room) => {
    socket.join(room);
    console.log(`${socket.id} joined room: ${room}`);
    socket.emit("message", `You joined room ${room}`);
  });

  socket.on("sendToRoom", (room) => {
    io.to(room).emit("message", `Message to ${room} from ${socket.id}`);
  });
});

server.listen(3000, () => console.log("Server running on port 3000"));

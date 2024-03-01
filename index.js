import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("user berhasil terhubung yeyyy )");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user berhasil terputuss  yeyyy )");
  });
});

server.listen(3000, () => console.log("wswswsws 3000"));

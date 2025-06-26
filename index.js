//method 1
// import { Server } from "socket.io";

// const io = new Server(4000, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connection", (socket) => {
//   socket.emit("welcome", "welcome to the channel");

//   //listen to the message from client by socket.on
//   socket.on("msg", (data) => {
//     console.log("msg from client", data);
//   });
// });

// method 2 New and to check if the server is really running

import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.emit("welcome", "welcome to the channel");

  //listen to the message from client by socket.on
  socket.on("msg", (data) => {
    console.log("msg from client", data);
  });
});

httpServer.listen(4000, () => {
  console.log("server is running at port 4000");
});

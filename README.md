1) npm create vite@latest my-app -- --template react
2) yarn
3) yarn run dev

4) npm init -y

# Open Two Terminals 

## one for server              one for client
yarn add socket.io          yarn add socket.io-client


create index.js in src

```
import { Server } from "socket.io";

const io = new Server(3001);

io.on("connection", (socket) => {
  socket.emit("welcome", "welcome to the channel");

  socket.on("msg", (data) => {
    console.log("msg from client", data);
  });
});
```

## then go to app.jsx
```
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { io } from "socket.io-client";
import { useEffect } from "react";
import "./App.css";

//initiliaze the connection
const socket = io("http://localhost:3001");

useEffect(() => {
  socket.on("connect", () => {
    // now we can listen all of the server messages
    //socket.on is getting messages from the server
    socket.on("WELCOME", (data) => {
      console.log("message from server", data);
    });

    //socket.emit will send message to the server
    socket.emit("msg", "Thanks for connecting");
  });
}, []);

function App() { return <> </>}
```

by this the error will be of cors 
Here i got the error of events name they are case sensitive

now check final file index.js
now check final file app.jsx

---


## How do we know if the server is running or not?
so we will do some changes 
```
 import { createServer } from "http";
const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

httpServer.listen(4000, () => {
  console.log("server is running at port 4000");
});

```
# NOTES:

# In client Side:  socket.on

## inside the socket.on

	socket.on => to get all the messages from server
	socket.emit => send message to the server

## In Server Side: io.on

# inside the io.on

	socket.on => to get all messages from client
	socket.emit => send message to the client    
 ---
# we use io.emit on server side to send to all connected devives for better understand see repo ChatApp-with-Socket.io




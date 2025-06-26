import { useState } from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";
import "./App.css";

function App() {
  //initiliaze the connection
  const socket = io("http://localhost:4000/");

  useEffect(() => {
    //add event listener
    socket.on("connect", () => {
      // now we can listen all of the server messages
      //socket.on is getting messages from the server
      socket.on("welcome", (data) => {
        console.log("message from server", data);
      });

      //socket.emit will send message to the server
      socket.emit("msg", "Thanks for connecting");
    });

    return () => {
      //remove Event listner
      socket.off("connect");
    };
  }, []);

  const [count, setCount] = useState(0);
  return (
    <>
      <p>Open the Console to Check</p>
    </>
  );
}

export default App;

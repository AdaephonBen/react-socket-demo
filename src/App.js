import React, { useEffect } from "react";
import logo from "./logo.svg";
import socketIOClient from "socket.io-client";
import "./App.css";

function App() {
  useEffect(() => {
    const socket = socketIOClient("http://13.127.14.125:4000/ml");
    socket.emit("get-cam", 1);

    socket.on("results-cam", (x) => console.log(JSON.stringify(x, null, 2)));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

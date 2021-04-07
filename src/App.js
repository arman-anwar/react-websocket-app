import './App.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import React, { useState, useEffect } from "react";
import { Button, } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { addMsg } from "./reduxStore";

const App = () => {

  const client = new W3CWebSocket('ws://localhost:3000');

  const dispatch = useDispatch();
  const messages = useSelector((state) => state.data.messages);


  useEffect(() => {

    client.onopen = () => {
      console.log('WebSocket Client Connected');
      // dispatch(setConn('Button was clicked'))

      client.send(JSON.stringify({
        message: 'Connection Established',
        type: "onopen"
      }));
    };
    client.onmessage = (message) => {
      dispatch(addMsg(message.data))
    };
  }, []);

  const sendMessage = () => {
    // dispatch(sendMsg('Button was clicked'))

    client.send(JSON.stringify({
      message: 'Button was clicked',
      type: "sendMessage"
    }));
  };


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div>
          {messages.map(txt => <p>{txt}</p>)}
        </div>

        <Button
          className="btn-question"
          onClick={() => {
            sendMessage();
          }}
        >
          {" Send Message "}
        </Button>
      </header>
    </div>
  );
}

export default App;

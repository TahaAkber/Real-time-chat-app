import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
function App() {
  const cookies = new Cookies();
  const [isauth, setisauth] = useState(cookies.get("auth-token"));
  const [room, setroom] = useState(null);
  const roomsetref = useRef(null);
  if (!isauth) {
    return (
      <div className="App">
        <Home />
        <Login />
      </div>
    );
  }
  return (
    <div>
      {room ? (
        <div>chat</div>
      ) : (
        <div>
          <h2>Enter Room Name</h2>
          <input ref={roomsetref} />
          <button
            onClick={() => {
              setroom(roomsetref.current.value);
            }}
          >
            Enter chat
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Home from "./pages/Chat";
import Login from "./pages/login";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import Chat from "./pages/Chat";
function App() {
  const cookies = new Cookies();
  const [isauth, setisauth] = useState(cookies.get("auth-token"));
  const [room, setroom] = useState(null);
  const roomsetref = useRef(null);
  // we need to go to directly into chat page without refresh if user is login in this way we should pass setisauth to loginpage as props and set to true
  if (!isauth) {
    return (
      <div className="App">
        {/* <Home /> */}
        <Login setisauth={setisauth} />
      </div>
    );
  }
  return (
    <div>
      {room ? (
        <div>
          {" "}
          <Chat room={room} />
        </div>
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

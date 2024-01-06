import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
function App() {
  const cookies = new Cookies();
  const [isauth, setisauth] = useState(cookies.get("auth-token"));
  const [room, setroom] = useState(null);
  if (!isauth) {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Router>
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
          <input />
          <button>Enter chat</button>
        </div>
      )}
    </div>
  );
}

export default App;

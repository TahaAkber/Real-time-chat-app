import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
function App() {
  const cookies = new Cookies();
  const [isauth, setisauth] = useState(cookies.get("auth-token"));
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
}

export default App;

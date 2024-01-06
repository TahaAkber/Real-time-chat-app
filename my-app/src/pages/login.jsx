import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
//user if we left the page or logout to keep alive we have universalcookies
const cookies = new Cookies();
function Login() {
  const navigate = useNavigate();
  const signin = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
    cookies.set("auth-token", result.user.refreshToken);
  };
  return (
    <div>
      <p>Sign Up using google</p>
      <button onClick={signin}>Sign In Using Google</button>
    </div>
  );
}

export default Login;

import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
//user if we left the page or logout to keep alive we have universalcookies
const cookies = new Cookies();
function Login(props) {
  const signin = async () => {
    const result = await signInWithPopup(auth, provider);
    cookies.set("auth-token", result.user.refreshToken);
    props.setisauth(true);
  };
  return (
    <div>
      <button onClick={signin} className="button">
        Sign In Using Google
      </button>
    </div>
  );
}

export default Login;

import React from "react";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const signin = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/");
    console.log(result);
  };
  return (
    <div>
      <p>Sign Up using google</p>
      <button onClick={signin}>Sign In Using Google</button>
    </div>
  );
}

export default Login;

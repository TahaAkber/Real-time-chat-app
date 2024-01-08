import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
function Chat(props) {
  const chatref = collection(db, "messages");
  const [chat, setchat] = useState(null);
  const [user] = useAuthState(auth);
  const handlefunction = async () => {
    if (chat === "") return;
    await addDoc(chatref, {
      text: chat,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: props.room,
    });
    setchat("");
  };
  return (
    <div className="chat">
      <input
        onChange={(e) => {
          setchat(e.target.value);
        }}
        value={chat}
      />
      <button type="submit" onClick={handlefunction} className="button">
        submit
      </button>
    </div>
  );
}

export default Chat;

import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  where,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../config/firebase";
import "../styles/chat.css";
function Chat(props) {
  const chatref = collection(db, "messages");
  const [chat, setchat] = useState(null);
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    const querymessages = query(
      chatref,
      where("room", "==", props.room),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(querymessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      setmessages(messages);
    });
    return () => unsubscribe();
  }, []);
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
    <div>
      <h1>Welcome To: {props.room.toUpperCase()}</h1>
      <div className="box">
        <div className="chat">
          <input
            onChange={(e) => {
              setchat(e.target.value);
            }}
            value={chat}
          />
          <button type="submit" onClick={handlefunction} className="button">
            send
          </button>
          <div>
            {messages.map((i) => (
              <div key={i.id}>
                <span className="message">{i.user}: </span>
                {i.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

import React from "react";
import { useSelector } from "react-redux";
import ChatView from "./chatView/ChatView";
import LoginForm from "./LoginForm";

function Authentication() {
  const { userName, id } = useSelector((state: any) => state.user);
  return userName && id ? <ChatView /> : <LoginForm />;
}

export default Authentication;

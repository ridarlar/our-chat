import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ChatView from "./components/chatView/ChatView";
import LoginForm from "./components/LoginForm";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chat",
    element: <ChatView />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

import { RoomHistory, appendMessage } from "../redux/slices/roomsSlice";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";

interface ChatHook {
  sendMessage: (newMessage: RoomHistory) => void;
}

export const useChat = (): ChatHook => {
  const [socket, setSocket] = useState<any>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = io("ws://18.118.23.82:8000/");

    setSocket(newSocket);
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("event_send_message", (data: any) => {
      dispatch(appendMessage(data));
    });
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = (newMessage: RoomHistory) => {
    socket.emit("event_send_message", newMessage);
  };
  return { sendMessage };
};

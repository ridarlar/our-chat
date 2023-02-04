import { RoomHistory, appendMessage } from "../redux/slices/roomsSlice";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";

interface ChatHook {
  sendMessage: (newMessage: RoomHistory) => void;
}

export const useChat = (): ChatHook => {
  const [socket, setSocket] = useState<any>(null);
  const portApi = process.env.REACT_APP_PORT_API_GATEWAY;
  const domainApi = process.env.REACT_APP_DOMAIN_API_GATEWAY;
  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = io(`ws://${domainApi}:${portApi}/`);

    setSocket(newSocket);
  }, [domainApi, portApi]);

  useEffect(() => {
    if (!socket) return;
    socket.on("event_send_message", (data: any) => {
      dispatch(appendMessage(data));
    });
    return () => {
      socket.disconnect();
    };
  }, [socket, dispatch]);

  const sendMessage = (newMessage: RoomHistory) => {
    socket.emit("event_send_message", newMessage);
  };
  return { sendMessage };
};

import { useEffect, useRef, useState } from "react";
import { CaretRightFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useChat } from "../../hooks/useChat";
import { RoomHistory } from "../../redux/slices/roomsSlice";
import "./chatContent.css";

const InputTextMessage = () => {
  const { sendMessage } = useChat();
  const { id, userName } = useSelector((state: any) => state.user);
  const [newMessage, setNewMessage] = useState({
    message: "",
    userName: "",
    userMessageId: "",
  } as RoomHistory);

  useEffect(() => {
    setNewMessage({
      ...newMessage,
      userName: userName,
      userMessageId: id,
    });
  }, [userName, id, setNewMessage, newMessage]);

  const handleInputChage = (e: any) => {
    setNewMessage({
      ...newMessage,
      [e.target.name]: e.target.value,
    });
  };

  const cleanState = () => {
    setNewMessage({
      ...newMessage,
      message: "",
    });
  };

  const sendTextMessage = () => {
    if (newMessage.message.length > 0) {
      sendMessage(newMessage);
      cleanState();
    } else {
      alert("Message is empty");
    }
  };

  return (
    <div className="chatcontainer--content--inputContainer">
      <input
        type="text"
        name="message"
        value={newMessage.message}
        onChange={(e) => handleInputChage(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendTextMessage();
          }
        }}
      />
      <CaretRightFill
        className="chatcontainer--content--input--icon"
        onClick={() => sendTextMessage()}
      />
    </div>
  );
};

const Message = ({
  userName,
  userMessageId: userMessgeId,
  message,
}: RoomHistory) => {
  const { id } = useSelector((state: any) => state.user);

  console.log("userMessgeId", userMessgeId);

  const orientationMessage = userMessgeId !== id ? "orientation-left " : "";
  const orientationMessageContent =
    userMessgeId !== id ? "orientation-content-left " : "";

  return (
    <div className={`message--orientation ${orientationMessage}`}>
      <div className="message--content">
        <h3
          className={`message--content--userNickName ${orientationMessageContent}`}
        >
          {userName}
        </h3>
        <p className="message--content--text">{message}</p>
      </div>
    </div>
  );
};

function ChatContent() {
  const { currentChat } = useSelector((state: any) => state.rooms);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [currentChat]);

  return (
    <div className="chatcontainer--content">
      <div className="chatcontainer--content--messages" ref={chatScrollRef}>
        {currentChat?.map((message: RoomHistory, index: number) => (
          <Message
            userMessageId={message.userMessageId}
            key={index}
            userName={message.userName}
            message={message.message}
          />
        ))}
      </div>
      <InputTextMessage />
    </div>
  );
}

export default ChatContent;

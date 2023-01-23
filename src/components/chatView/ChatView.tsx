import ChatContent from "./ChatContent";
import ChatRooms from "./ChatRooms";
import "./chatView.css";

function ChatView() {
  return (
    <div className="chatview--container">
      {/* <ChatRooms /> */}
      <ChatContent />
    </div>
  );
}

export default ChatView;

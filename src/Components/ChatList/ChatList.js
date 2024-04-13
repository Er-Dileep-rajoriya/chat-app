import "./ChatList.css";

function ChatList({ messages, handleLike }) {
  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.user === "You" ? "sent" : "received"}`}
        >
          <div className="message-content">
            <span className="message-sender">{message.user}</span>
            <div className="message-text">{message.text}</div>
            <div className="message-actions">
              <button className="like-button" onClick={() => handleLike(index)}>
                <i className="fas fa-thumbs-up">❤️</i> {message.likes}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;

import "./TextForm.css";
import { useEffect, useState } from "react";
import Picker from "@emoji-mart/react";
import { useRef } from "react";

function TextForm({
  handleSendMessage,
  setShowUsersList,
  showUsersList,
  handleMention,
  user_list,
}) {
  const [inputMessage, setInputMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit() {
    handleSendMessage(inputMessage, setInputMessage);

    inputRef.current.focus();
  }

  const handleEmojiSelect = (emoji) => {
    setInputMessage((prevMessage) => prevMessage + emoji.native);
    setShowEmojiPicker(false); // Hide emoji picker after selecting emoji
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Type a message"
        value={inputMessage}
        ref={inputRef}
        onChange={(e) => setInputMessage(e.target.value)}
        onFocus={() => setShowUsersList(false)} // Hide user list when focusing on input
      />
      <button onClick={() => setShowUsersList(!showUsersList)}>@</button>
      {showUsersList && (
        <div className="user-list">
          {user_list.map((user, index) => (
            <div
              key={index}
              className="user"
              onClick={() => handleMention(user, setInputMessage)}
            >
              {user}
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
      {showEmojiPicker && (
        <Picker
          set="emojione"
          onEmojiSelect={handleEmojiSelect}
          style={{ position: "absolute", bottom: "50px", right: "10px" }} // Adjust position as needed
        />
      )}
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default TextForm;

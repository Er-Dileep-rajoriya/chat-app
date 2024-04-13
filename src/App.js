import ChatList from "./Components/ChatList/ChatList";
import TextForm from "./Components/TextForm/TextForm";
import Navbar from "./Components/Navbar/Navbar";
import { useState } from "react";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);
  const [showUsersList, setShowUsersList] = useState(false);

  const handleSendMessage = (inputMessage, setInputMessage) => {
    if (inputMessage.trim() !== "") {
      const randomUser =
        user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = { user: randomUser, text: inputMessage, likes: 0 };
      setMessages([...messages, newMessage]);
      setInputMessage("");
      setShowUsersList(false); // Hide user list after sending message
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes++;
    setMessages(updatedMessages);
  };

  const handleMention = (username, setInputMessage) => {
    setInputMessage((prevMessage) => prevMessage + `@${username} `);
    setShowUsersList(false); // Hide user list after mentioning user
  };

  return (
    <>
      <h1 className="app-heading">Chat App</h1>
      <div className="app-container">
        <Navbar />
        <ChatList handleLike={handleLike} messages={messages} />
        <TextForm
          handleSendMessage={handleSendMessage}
          setShowUsersList={setShowUsersList}
          showUsersList={showUsersList}
          handleMention={handleMention}
          user_list={user_list}
        />
      </div>
    </>
  );
}

export default App;

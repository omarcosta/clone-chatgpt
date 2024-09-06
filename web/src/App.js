import { useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";

import { makeRequest } from "./api/api";

// Components
import { SideMenu } from "./components/SideMenu/SideMenu";
import { ChatMessage } from "./components/ChatMessage/ChatMessage";

function App() {

  const[input, setInput] = useState("")
  const[chatlog, setChatlog] = useState([{
    author: "gpt",
    message: "How can I help you?"
  }])

  async function handleSubmit(e){
    e.preventDefault()
    let response = await makeRequest({prompt: input})
    response = response.data.split('\n').map(line => <p>{line}</p>)
    setChatlog([...chatlog, {
      author: 'me',
      message: `${input}`
    },
    {
      author: 'gpt',
      message: response
    }])

    setInput("")
  }

  return (
    <div className="App">
      <SideMenu></SideMenu>
      
      <section className="chatbox">
        <div className="chat-log">
          {chatlog.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
            />
          ))}

        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              row='1'
              className='chat-input-textarea'
              value={input}
              onChange={e => setInput(e.target.value)}
            />
          </form>
        </div>
      </section>
    
    </div>
  );
}

export default App;

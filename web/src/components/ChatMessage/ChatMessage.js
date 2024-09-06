import React from "react";
import Avatar from "../../assets/avatar";
import './ChatMessage.css'

// author: (user | gpt)
// message: String prompt
export const ChatMessage = ({message}) => {
    return(
    <div className={`chat-message ${message.author === 'gpt'} && "chatgpt"`}>
        <div className="chat-message-center">
            <div className={`avatar ${message.author === 'gpt' && "chatgpt"}`}>
                { message.author === 'gpt' && ( <Avatar/> ) }

            </div>
            <div className="message">
                {message.message}
            </div>
        </div>
    </div>
    )
}
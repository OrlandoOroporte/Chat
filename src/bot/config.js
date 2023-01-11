import { createChatBotMessage } from 'react-chatbot-kit';
import React from "react";

const botName = 'Orlando'


const config = {
  initialMessages: [createChatBotMessage(`Hello! My name is ${botName}`)],
  customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: '', padding: "5px", borderRadius: "3px" }}><b>Chat de Orlando</b></div>,
 },
  botName: botName,
  customStyles:{
    botMessageBox:{
      backgrounColor: 'red', 

    },
    chatbutton:{
      backgroundColor: 'white',
    },
    

  }
};

export default config;
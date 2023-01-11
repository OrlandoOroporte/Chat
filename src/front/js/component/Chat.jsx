import React from "react";
import { Messages } from "./Messages.jsx";
import { Input } from "./Input.jsx";



export const Chat = () =>{

    return (
        <div className="chat">
            <div className="chatInfo">
                <span className="chatInfo-span">Jhon</span>
                <div className="chatIncons">
                   <img className="chatInfo-img" src="https://cdn.iconscout.com/icon/free/png-256/videocam-1781674-1518355.png" alt=""/>
                   <img className="chatInfo-img" src="https://cdn-icons-png.flaticon.com/512/359/359858.png" alt="" />
                   <img className="chatInfo-img" src="https://static.thenounproject.com/png/474212-200.png" alt=""/>

                </div>
            </div>

            <div className="message-container"> 
                <Messages/>     
                
            </div>
                  
            <Input/>
            </div>

    )
}

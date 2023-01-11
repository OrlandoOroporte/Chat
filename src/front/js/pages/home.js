import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


import config from '../../../bot/config.js';
import MessageParser from '../../../bot/MessageParser.jsx';
import ActionProvider from '../../../bot/ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import { Sidebar } from "../component/Sidebar.jsx";
import { Chat } from "../component/Chat.jsx";
import { Input } from "../component/Input.jsx";



export const Home= () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chat/>
        </div>

    </div>

    // <div>
    //   <Chatbot
    //     config={config}
    //     messageParser={MessageParser}
    //     actionProvider={ActionProvider}
    //   />
    // </div>
  );
};

// export const Home = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="text-center mt-5">
// 			<h1>Hello Rigo!!</h1>
// 			<p>
// 				<img src={rigoImageUrl} />
// 			</p>
// 			<div className="alert alert-info">
// 				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
// 			</div>
// 			<p>
// 				This boilerplate comes with lots of documentation:{" "}
// 				<a href="https://start.4geeksacademy.com/starters/react-flask">
// 					Read documentation
// 				</a>
// 			</p>
// 		</div>
// 	);
// };

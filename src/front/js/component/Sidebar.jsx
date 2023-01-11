import React from "react";
import Navbar from '../component/Navbar.jsx'
import Search from '../component/Search.jsx'
import Chats from '../component/Chats.jsx'


export const Sidebar = () =>{

    return (
        <div className="sidebar">
            <Navbar/>
            <Search/>
            <Chats/>
            
        </div>
    )
}
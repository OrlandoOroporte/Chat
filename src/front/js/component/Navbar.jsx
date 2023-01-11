import React from "react";
import rigo from '../../img/rigo-baby.jpg'

const Navbar= () =>{

    return (
        <div className="navbar">
            <span className="logo">Oro Chat</span>
            <div className="user-nav">
                <img src="https://www.uc3m.es/sdic/media/informatica/img/mediana/original/IM_Icono-Google-Contacts/logo-google-contacts-1.png"alt="" className="img-nav-sidebar" />
                <span >Jhon</span>
                <button className="buton-nav-sidebar">Salir</button>
            </div>
        </div>
    )
}

export default Navbar
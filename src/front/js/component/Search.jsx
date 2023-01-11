import React from "react";

const Search = () =>{

    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Buscar contacto"/>
            </div>
            <div className="user">
                <img src="https://www.uc3m.es/sdic/media/informatica/img/mediana/original/IM_Icono-Google-Contacts/logo-google-contacts-1.png" alt="" className="img-nav-sidebar"/>
                <span>
                    Juan Carlos
                </span>
            </div>
        </div>
    )
}

export default Search 
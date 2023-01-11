import React from "react";

export const Login = () => {
  return(
    <div className="formContanier">
      <div className="formWrapper">
        <span className="logo">Oro chat</span>
        <span className="title">Inicio de Sesion</span> 
        <form>
            <input type='email' placeholder="email"/>
            <input type='password' placeholder="password"/>
           
            <button>Iniciar Seccion</button>
        </form>
        <p>No tienes cuenta? <a href="">Registrate</a></p>

      </div>
    </div>
  );
};

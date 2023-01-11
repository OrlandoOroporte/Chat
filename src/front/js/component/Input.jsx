import React from "react";

 export const Input = () =>{

    return (
        <div className="input">
            <input type="text" placeholder="Escribe tu mensaje" className="input-tex"/>
            <div className="send">
            <img src="https://static.thenounproject.com/png/2952923-200.png" alt=""/>
            <input type="file" style={{display: "none"}} id="file"/>
            <label  className="send-comp"  htmlFor="file">
                <img src="data:image/png;base64,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" alt="" />
            </label>
            <button  className="send-comp"> Send</button>
            </div>     
        </div>
    )
}


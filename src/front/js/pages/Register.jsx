import React, { useState } from "react";
import rigo from "../../img/rigo-baby.jpg";
import {
  createUserWithEmailAndPassword,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { app, auth, storage, db} from "../../../firebase";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


export const Register = () => {
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    //controlador de imaganes
    const storageRef = ref(storage, displayName);
    const storageImageRef = ref(storage, File.type);

    storageRef.name === storageImageRef.name;
    storageRef.fullPath === storageImageRef.fullPath;
    const baseAlmacen = "gs://orochat-74708.appspot.com/"
    const gsReference = ref(storage, `${baseAlmacen}${displayName}`);
    const imagen = await uploadBytes(storageRef, file);
    console.log(imagen)
    const url = await getDownloadURL(gsReference);
    console.log(url)

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      if (res) {
    
        updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: url
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
          await setDoc(doc(db,"user",res.user.uid),{
            uid: res.user.uid,
            name: displayName,
            email: email,
            photo: url 
          })
        alert("Usario creado con exito");
        navigate("/");
      };
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
    }
  };


  return (
    <div className="formContanier">
      <div className="formWrapper">
        <span className="logo">Oro chat</span>
        <span className="title">Registro</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" accept=".jpg, .jpeg, .png" />
          {/* <input style={{ display: "none" }} type="file" id="file" /> */}
          {/* <label htmlFor="file">
            <img src={rigo} alt="" />
            <span className="title"> Agregar Avatar</span>
          </label> */}
          <button>Registrarse</button>
        </form>
        <p>
          Ya estas registrado? <a href="/">Inicia Sesion</a>
        </p>
      </div>
    </div>
  );
};

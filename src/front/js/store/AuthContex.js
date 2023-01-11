import { createContext, useEffect, useState, } from "react";
import { auth } from "./.././../../../src/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
//proveedor de contexto de authenticacion

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurretUser] = useState({});
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurretUser(user);
      console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

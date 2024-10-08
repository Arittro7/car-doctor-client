import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config'

export const AuthContext  = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

  const [user, setUser] =  useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() =>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      console.log('current User', currentUser);
      setLoading(false);
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const  signIn  = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  const authInfo ={
    user,
    loading,
    createUser,
    signIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
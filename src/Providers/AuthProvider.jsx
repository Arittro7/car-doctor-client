import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config'

export const AuthContext  = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

  const [user, serUser] =  useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
      serUser(currentUser);
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

  const authInfo ={
    user,
    loading,
    createUser,
    signIn,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
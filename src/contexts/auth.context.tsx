import { initializeApp } from "firebase/app";
import React, { createContext, useEffect, useState } from "react";
import Constants from 'expo-constants';
import {
  inMemoryPersistence,
  getAuth, 
  initializeAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

type AuthContextType = {
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  isSigned: boolean;
};

const AuthContext = createContext<AuthContextType>({
  signIn: () => {},
  signUp: () => {},
  isSigned: false
});

export const AuthProvider = ({ children }) => {
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    initApp();
  }, [])
  
  const initApp = () => {
    const firebaseConfig = {
      apiKey: process.env.EXPO_PUBLIC_API_KEY,
      authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
      storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.EXPO_PUBLIC_APP_ID
    };

    try {
      const app = initializeApp(firebaseConfig);
      initializeAuth(app, {
        persistence: inMemoryPersistence
      });
    } catch (error) {
      console.error('Error starting Firebase app', error);
    }
  }

  const signIn = async (email: string, password: string) => {
    const myAuth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(myAuth, email, password);
      const token = await response.user.getIdToken();
      token ? setIsSigned(true) : setIsSigned(false);
    } catch (error) {
      console.log('SignIn Error', error);
      setIsSigned(false)
    }
  }

  const signUp = async (email: string, password: string) => {
    const myAuth = getAuth();
    try {
      const response = await createUserWithEmailAndPassword(myAuth, email, password)
      console.log(response, 'aa')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      isSigned,
      signUp,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
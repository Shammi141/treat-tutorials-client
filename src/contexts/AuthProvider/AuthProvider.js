import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


//creating context for user
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    //showing google logged in user
    const [user, setUser] = useState(null);

    //for google register
    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //google login
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    //google logout
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser =>{
            console.log('user inside state changed', currentUser);
            setUser(currentUser);
        }));

        return () =>{
            unsubscribe();
        }
            
    },[])


    //for using other file
    const AuthInfo = {user, providerLogin, logOut, createUser, signIn };
    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
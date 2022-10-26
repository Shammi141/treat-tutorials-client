import React from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


//creating context for user
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    //showing google logged in user
    const [user, setUser] = useState(null);

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
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


    const AuthInfo = {user, providerLogin };
    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
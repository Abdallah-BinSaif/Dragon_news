import React, {createContext, useEffect, useState} from 'react';
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut } from "firebase/auth";
import {app} from "../firebase.config.js";
export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [error, setError] = useState("")
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser=> {

                setUser(currenUser)

        })
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        setUser,
        error,
        setError,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { useEffect, createContext } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log("current users", currentUser)
                setLoading(false)
            }
        })

        return () => {
            return unsubscribe()
        }

    }, []);

    return (
        <AuthContext.Provider value={{ user, loginUser, signUpUser, logOut, googleLogin, loading }}>
            {children}
        </AuthContext.Provider>
    )


}
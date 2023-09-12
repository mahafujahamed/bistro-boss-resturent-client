import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google sign in
    const googleProvider = new GoogleAuthProvider(); 

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        // get and set token
            if(currentUser) {
                axios.post('https://bistro-boss-resturent-server-lag310oe7-duplicate-yours.vercel.app/jwt', {email: currentUser.email})
                .then(data => {
                    // console.log(data.data)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token');
            }

            // setLoading(false);
            // console.log('currentUser', currentUser);
        });
        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        signIn,
        googleSignIn,
        logOut,
        user,
        loading,
        createUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
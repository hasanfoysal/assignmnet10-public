
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../../components/Root/Firebase/firebase.config";
// import app from "../";


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    

    const updateUserProfile = (name,image) =>{
       // eslint-disable-next-line no-undef
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL:image
          })
          
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut  = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
      const unSubscribe =  onAuthStateChanged(auth,currentUser =>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])


    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        


    };
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;

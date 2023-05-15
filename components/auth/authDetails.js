import React, {useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            user = auth.currentUser;
            const uid = user.uid;  
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    return (
        <div>
            AuthDetails
        </div>
    )
}
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDu15ajWv2MwvLzhBjB3DwqfdPufdMAhos",
    authDomain: "blog-e7743.firebaseapp.com",
    projectId: "blog-e7743",
    storageBucket: "blog-e7743.appspot.com",
    messagingSenderId: "821326898167",
    appId: "1:821326898167:web:7edc86dded72f8ebdc84f2",
    measurementId: "G-L5YS7FVCTG"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

// const provider = new GoogleAuthProvider()

// export const signInWithGoogle = () =>{
//     signInWithPopup(auth, provider).then((result)=>{
//         console.log(result)
//         const name = result.user.displayName
//         const email = result.user.email
//         const photo = result.user.photoURL
    
//         localStorage.setItem('name', name)
//         localStorage.setItem('email', email)
//         localStorage.setItem("photo", photo)
      
        
//     }).catch((error)=>{
//         console.log(error)
//     })
// }
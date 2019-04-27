import { Container } from 'unstated'
import * as Firebase from 'firebase/app';
import 'firebase/auth';
import env from '../env'

class FirebaseManager extends Container{
    constructor(props){
        super(props)
        this.state = {

        }
        this.fbInstance = null
    }

    init(){
        let config = {  
            apiKey: env.FIREBASE_APIKEY,
            authDomain: env.FIREBASE_AUTHDOMAIN,
            databaseURL: env.FIREBASE_DBURL,
            projectId: env.FIREBASE_PROJECTID,
            storageBucket: '',
            messagingSenderId: ''
          };
          this.fbInstance = Firebase.initializeApp(config); 
          this.bindAuthListener() 
    }

    bindAuthListener = () => {
        this.fbInstance.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("user sign in detected")
            } else {
                console.log("No user found")
            }
          });
    }

    getInstance = () => {
        return this.fbInstance
    }

    doSignUp = async(email = '', password = '') => { 
        return this.fbInstance.auth().createUserWithEmailAndPassword(email, password)
    }

    dologin = (email = '', password = '') => {

    }



}

export default new FirebaseManager()
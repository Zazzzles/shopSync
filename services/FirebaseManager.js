import { Container } from 'unstated'
import * as Firebase from 'firebase/app';
import 'firebase/auth';

class FirebaseManager extends Container{
    constructor(props){
        super(props)
        this.state = {

        }
        this.fbInstance = null
    }

    init(){
        let config = {  
            apiKey: 'AIzaSyDysLZdvhZ73_G7Etx7H13GDfLQku7Enj0',
            authDomain: 'shopsync-e1b2b.firebaseapp.com',
            databaseURL: 'shopsync-e1b2b.firebaseio.com',
            projectId: 'shopsync-e1b2b',
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
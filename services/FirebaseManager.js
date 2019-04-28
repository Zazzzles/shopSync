import { Container } from 'unstated'
import * as Firebase from 'firebase/app';
import 'firebase/auth';
import Config from 'react-native-config'
class FirebaseManager extends Container{
    constructor(props){
        super(props)
        this.state = {
            currentUser: null
        }
        this.fbInstance = null
    }

    init(signInCallback){
        let config = {  
            apiKey: Config.FIREBASE_APIKEY,
            authDomain: Config.FIREBASE_AUTHDOMAIN,
            databaseURL: Config.FIREBASE_DBURL,
            projectId: Config.FIREBASE_PROJECTID,
            storageBucket: '',
            messagingSenderId: ''
          };
          this.fbInstance = Firebase.initializeApp(config); 
          this.bindAuthListener(signInCallback) 
    }

    bindAuthListener = (signInCallback) => {
        let self = this
        this.fbInstance.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("user sign in detected")
                self.setState({currentUser: user}, () => signInCallback(user))
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
        return this.fbInstance.auth().signInWithEmailAndPassword(email, password)
    }



}

export default new FirebaseManager()
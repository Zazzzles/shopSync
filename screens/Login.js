import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

//  Components
import TextField from '../components/TextField'
import Button from '../components/Button'
import Notification from '../components/Notification'

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

//  Assets
import Logo from '../assets/logo.png'
import BG from '../assets/login-bg.png'

//  Services
import FirebaseManager from '../services/FirebaseManager'
import { login } from '../services/midlayer'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    };
  }

  componentDidMount = () => {
    FirebaseManager.init((user) => {
        this.props.navigation.navigate("Groups")
    })
  }

  doSubmit = async () => {
    if(this.fieldsValid()){
        const { email, password } = this.state
        const { navigation } = this.props
        this.setState({loading: true})
        const loginStatus = await login(email, password)
        if(loginStatus.success){
          this.setState({
            loading: false
          })
          navigation.navigate("Groups")
        }else{
          this.notification.show('error', loginStatus.message.split('Error:')[1])
          this.setState({
            loading: false
          })
        }
    }
  }

  fieldsValid = () => {
    const { email, password } = this.state
    this.setState({errorText: ''})
    if(email === ''){
      this.notification.show('error', 'Enter an email')
      return(false)
    }
    if(password === ''){
      this.notification.show('error', 'Enter a password')
      return(false)
    }
    return true
  }

  createAccount = () =>{
    const { navigation } = this.props
    navigation.navigate("NewAccount")
  }

  render() {
    const { email, password, loading } = this.state
    return (
      <ImageBackground
        source={BG}
        style={styles.bg}
      >
       <Image source={Logo} style={styles.logo}/>
       <KeyboardAvoidingView style={styles.fieldContainer} behavior={'padding'}>
            <Text style={styles.signInText}>Sign in</Text>
            <TextField
              placeholder={"Email address"}
              value={email}
              onChangeText={(email) => this.setState({email})}
            />
            <TextField
               placeholder={"Password"}
               value={password}
               secureTextEntry
               onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity onPress={() => this.createAccount()}>
              <Text style={styles.signInText}>Or create an account</Text>
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
        <Button
          label={"Login"}
          onPress={() => this.doSubmit()}
          loading={loading}
        />
        <Notification ref={(elem) => this.notification = elem}/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    bg:{
        ...Layout.fullscreen,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 80
    },
    logo:{
        width: 90,
        height: 120,
    },
    fieldContainer:{
        width: '100%',
        height: 190,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 70,
    },
    signInText:{
      color: 'white',
      fontSize: 15,
      ...Layout.font
    },
    errorText:{
      color: Colors.accent,
      ...Layout.font
    }
})
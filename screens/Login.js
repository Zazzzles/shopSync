import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, KeyboardAvoidingView } from 'react-native';

//  Components
import TextField from '../components/TextField'
import Button from '../components/Button'

//  Config
import Layout from '../config/layout'
import Colors from '../config/colors'

//  Assets
import Logo from '../assets/logo.png'
import BG from '../assets/login-bg.png'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorText: '',
      loading: false
    };
  }

  doSubmit = () => {
   // if(this.fieldsValid()){
      const { navigation } = this.props
      this.setState({loading: true})
      setTimeout(() => {
        this.setState({
          loading: false
        })
        navigation.navigate("Groups")
      }, 800)
  //  }
  }

  fieldsValid = () => {
    const { email, password } = this.state
    this.setState({errorText: ''})
    if(email === ''){
      this.setState({errorText: 'Enter an email'})
      return(false)
    }
    if(password === ''){
      this.setState({errorText: 'Enter a password'})
      return(false)
    }
    return true
  }

  render() {
    const { email, password, errorText, loading } = this.state
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
              onChange={(email) => this.setState({email})}
            />
            <TextField
               placeholder={"Password"}
               value={password}
               onChange={(password) => this.setState({password})}
            />
            <Text style={styles.signInText}>Or create an account</Text>
        </KeyboardAvoidingView>
        <Text style={styles.errorText}>
        {errorText}
        </Text>
        <Button
          label={"Login"}
          onPress={() => this.doSubmit()}
          loading={loading}
        />
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
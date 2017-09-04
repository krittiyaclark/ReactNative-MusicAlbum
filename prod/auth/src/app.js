import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAq-1EmEr4EURLdoyFf05YeYb-9O3agr28',
        authDomain: 'authentication-b414c.firebaseapp.com',
        databaseURL: 'https://authentication-b414c.firebaseio.com',
        projectId: 'authentication-b414c',
        storageBucket: 'authentication-b414c.appspot.com',
        messagingSenderId: '179303492945'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

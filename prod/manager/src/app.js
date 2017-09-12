import React, { Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyATJEwfxAT7Z62TawKS1D1H-GxdGvAQ4no",
      authDomain: "manager-9495d.firebaseapp.com",
      databaseURL: "https://manager-9495d.firebaseio.com",
      projectId: "manager-9495d",
      storageBucket: "manager-9495d.appspot.com",
      messagingSenderId: "292521456225"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}


export default App;

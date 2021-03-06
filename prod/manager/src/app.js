import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyATJEwfxAT7Z62TawKS1D1H-GxdGvAQ4no',
      authDomain: 'manager-9495d.firebaseapp.com',
      databaseURL: 'https://manager-9495d.firebaseio.com',
      projectId: 'manager-9495d',
      storageBucket: 'manager-9495d.appspot.com',
      messagingSenderId: '292521456225'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

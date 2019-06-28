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
    apiKey: "AIzaSyA-HxElB_LyuU73F7os7piwd_kpIdlMaTE",
    authDomain: "auth-d32a4.firebaseapp.com",
    databaseURL: "https://auth-d32a4.firebaseio.com",
    projectId: "auth-d32a4",
    storageBucket: "",
    messagingSenderId: "354864244762",
    appId: "1:354864244762:web:c0fb8b01c74bad69"
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

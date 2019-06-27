
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { CardSection,Card } from './components/common';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyA-HxElB_LyuU73F7os7piwd_kpIdlMaTE",
        authDomain: "auth-d32a4.firebaseapp.com",
        databaseURL: "https://auth-d32a4.firebaseio.com",
        projectId: "auth-d32a4",
        storageBucket: "",
        messagingSenderId: "354864244762",
        appId: "1:354864244762:web:c0fb8b01c74bad69"
    });
    console.log("FireBase Initialize");
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
      console.log(this.state.loggedIn);
 
    });

    console.log("Check Auth succeed");
   }

  renderContent() {
    console.log(this.state.loggedIn);
 
    switch (this.state.loggedIn) {
        
      case true:
        return (
        <Card>
            <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                </Button>
          </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

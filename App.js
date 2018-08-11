import React from 'react'
import { AsyncStorage, StyleSheet, Text, View } from 'react-native'
import LoginScreen from './src/LoginScreen'
import Profile from './src/Profile'


export default class App extends React.Component {
  state = {
    accessToken: "",
    loggedIn: false
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  storeToken = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      // Error saving data
    }
  }

  login = (token) => {
    this.storeToken(token)
    this.setState({
      accessToken: token,
      loggedIn: true
    })
  }


  checkLoginStatus = () => {
    this.retrieveToken().then((token) => {
      if (token) {
        this.setState({
          accessToken: token,
          loggedIn: true
        })
      } else {

      }
    })
  }
  retrieveToken = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('token');
      return accessToken
     } catch (error) {
        return null
       // Error retrieving data
     }
  }

  render() {

    const { loggedIn, accessToken } = this.state
    console.log(loggedIn, accessToken)
    return (
      <View style={styles.container}>
        {
          loggedIn
          ?
          <Profile token={accessToken}/>
          :
          <LoginScreen login={this.login}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

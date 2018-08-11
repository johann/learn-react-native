import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { authorize } from 'react-native-app-auth'

const config = {
  clientId:'',
  clientSecret: '',
  redirectUrl: 'learn-auth://learn/callback',
  scopes: [],
  serviceConfiguration: {
    authorizationEndpoint: 'https://learn.co/oauth/authorize',
    tokenEndpoint: 'https://learn.co/oauth/token'
  }
}

class LoginScreen extends Component {

  handleLogin = async () => {
    const auth = await authorize(config)
    const { accessToken } = auth
    this.props.login(accessToken)
  }

  render() {
    return (
      <View>
        <Button title="Login With Learn" onPress={this.handleLogin} />
      </View>
    )
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

export default LoginScreen

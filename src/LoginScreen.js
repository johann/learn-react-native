import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { authorize } from 'react-native-app-auth'

const config = {
  clientId:'c00d880168abfa5409b69c9267989a60019d5757fcf5095c1bdc16513f48dd49',
  clientSecret: '726ed128be992068be3ea6579d5ef49c47eb78dc82366ff20dc1fc89c472bef2',
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

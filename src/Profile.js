import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, Text, View } from 'react-native'
import { Avatar, Button } from 'react-native-elements'

class Profile extends Component {

  state = {
    user: {
      email: '',
      github_username: '',
      github_gravatar_url: '',
      first_name: '',
      last_name: '',
      admin: false
    }
  }

  componentDidMount() {
    this.fetchUser()
  }

  fetchUser() {
    fetch('https://learn.co/api/users/me', {
      headers: {
        'Authorization': `Bearer ${this.props.token}`,
        'Accept': 'version=1'
      }
    })
    .then((res) => res.json())
    .then((user) => {
      this.setState({
        user
      })
      console.log(user)
    })
  }

  render() {
    const { email, github_username, github_gravatar_url, first_name, last_name, admin } = this.state.user
    console.log(github_gravatar_url)
    return (
      <View>
       <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white', borderRadius: 5, alignItems: 'center', marginHorizontal: 10, height: 250, marginBottom: 10}}>
          <View style={{flex: 3, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Avatar
                width={100}
                height={100}
                source={{
                  uri: github_gravatar_url,
                }}
                activeOpacity={0.7}
                avatarStyle={{borderRadius: 100/2}}
                overlayContainerStyle={{backgroundColor: 'transparent'}}
              />
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={{ flex: 1, marginTop: 10, justifyContent: 'center'}}>
                <Text style={{ fontSize: 25, color: 'rgba(98,93,144,1)', marginLeft: -15}}>
                  { first_name + " " + last_name  }
                </Text>
                <Text style={{ fontSize: 14, color: 'rgba(98,93,144,1)', marginLeft: -15}}>
                  { `@${github_username}`  }
                </Text>
              </View>
            </View>
          </View>
          <View style={{width: 300, borderWidth: 0.5, borderColor: 'rgba(222, 223, 226, 1)', marginHorizontal: 20, height: 1, marginVertical: 10}} />
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <Button
                title='View Profile'
                buttonStyle={{height: 33, width: 120, backgroundColor: 'rgba(222, 223, 226, 1)', borderRadius: 5}}
                titleStyle={{ fontSize: 13, color: 'gray'}}
                onPress={() => console.log('aye')}
                underlayColor="transparent"
              />
            </View>
            <View style={{flex: 1}}>
              <Button
                title='Add User'
                buttonStyle={{height: 33, width: 120, backgroundColor: 'rgba(113, 154, 112, 1)', borderRadius: 5}}
                titleStyle={{ fontSize: 13, color: 'white'}}
                onPress={() => console.log('aye')}
                underlayColor="transparent"
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Profile

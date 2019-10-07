import React, {useState, useEffect, Component} from 'react';
import { View, Text, AsyncStorage, Button, TouchableOpacity, Image } from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../../../public/actions/users';
import {withNavigation} from 'react-navigation';

export class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  getAccount
  async logout() {
    AsyncStorage.clear();
    await this.props.dispatch(logout());
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View>
    <Image
          source={require('../../../../images/logout.png')}
          style={{
            width: 250,
            height: 250,
            alignItems: 'center',
            marginLeft: 95,
            marginTop: 155,
          }}
        />
        <TouchableOpacity
          onPress={() => this.logout()}
          style={{
            width: 350,
            height: 65,
            backgroundColor: '#e74c3c',
            borderRadius: 5,
            alignItems: 'center',
            padding: 25,
            marginTop: 25,
            marginLeft: 35,
          }}>
          <Text sytyle={{textAlign: 'center', marginTop: 10, fontWeight: 200, shadowRadius: 50,}}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default withNavigation(connect(mapStateToProps)(Profile));

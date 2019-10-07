import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  Image,
  AsyncStorage,
} from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'


import {register} from '../../../public/actions/users';
import {connect} from 'react-redux';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export class Register extends Component {
  state = {
    username: '',
		email: '',
		password: ''
  };

  handlerSubmit = async () => {

    await this.props.dispatch(register(this.state));
    alert('Succes Register, Please Login')
    this.props.navigation.navigate('Login');

  };

  render() {
    return (
      <View style={styles.container}>
           <View style={styles.logoContainer}>
            <Text style={styles.title}>Register</Text>
        </View>
        <View style={styles.formContainer}>
        <View style={{marginBottom: 30}}>
        <Icon 
        style={styles.searchIcon} 
        name="ios-person" 
        size={25} 
        color="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={username => this.setState({username})}
        />
        <View style={{marginBottom: 30}}>
        <Icon 
        style={styles.searchIcon} 
        name="ios-mail" 
        size={25} 
        color="#000"
        />
          <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={email => this.setState({email})}
        />
        <View style={{marginBottom: 30}}>
        <Icon 
        style={styles.searchIcon} 
        name="ios-key" 
        size={25} 
        color="#000"
        />
        <TextInput
           placeholder="Password"
           placeholderTextColor="rgba(255,255,255,0.7)"
           secureTextEntry
           returnKeyType="go"
           style={styles.input}
          onChangeText={password => this.setState({password})}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.handlerSubmit()}>
          <Text style={styles.buttonText}> Register </Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Login')}>
          <Text style={{textAlign: 'center', marginTop: 10, textShadowRadius: 10, textDecorationLine: 'underline'}}>
            Back To Login
          </Text>
        </TouchableOpacity>
        </View> 
      </View>
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
      flex: 1,
      backgroundColor: '#0097e6'
  },
  logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  logo: {
      width: 130,
      height: 155
  },
  title: {
      color: '#fff',
      marginTop: 10,
      width: 200,
      textAlign: 'center',
      opacity: 0.9,
      fontSize: 25,
      fontWeight: 'bold',
      fontFamily: ''
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 25,
    color: '#fff',
    paddingHorizontal: 10,
    paddingLeft: 40,
    borderRadius: 10
    
},
buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 100
},
buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700'
},
  form: {
    justifyContent: 'space-between',
  },
  searchIcon: {
    padding: 10,
    position: 'absolute'
}
});

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default withNavigation(connect(mapStateToProps)(Register));

import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image, AsyncStorage} from 'react-native';
// import {Image} from 'react-native-elements';

const SplashScreen = props => {
  useEffect(() => {
    AsyncStorage.getItem('auth')
      .then(value => {
        if (value.length > 0) {
          props.navigation.navigate('App');
        }
      })
      .catch(() => props.navigation.navigate('Login'));
  }, []);

  return (
    <View>
   <Text>
     Loading....
   </Text>
    </View>
  );
};

export default SplashScreen;

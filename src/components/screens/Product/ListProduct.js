
import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, FlatList, AsyncStorage, TextInput} from 'react-native';
import {getProducts} from '../../../public/actions/products';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
// import {Icon, Button, Container, Header, Content, Left, Right}

import Card from '../items/Card';
import {NavigationEvents} from 'react-navigation';
import axios from 'axios';
import {TouchableOpacity, Text} from 'react-native'


export class ListProduct extends Component {
  state = {
    products: [],
  };
  
  getData() {
    axios.get(`/products`)
    .then(response =>
      this.setState({
        products: response.data.data,
      }),
    );
  }

  componentDidMount() {
    this.getData();
  }
  

  render() {
    const item = this.state.products;
    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={() => { this.getData();}}/>
          <TextInput 
                style={styles.input}
                placeholder="Search.."
                placeholderTextColor = "#dfe4ea"
                /> 
        <View style={{flex: 1}}>
        <LinearGradient colors={['#dff9fb', '#22a6b3']} style={styles.container}>
        {/* flexDirection: 'row', flexWrap: 'wrap'  */}
        {/* <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000"/> */}
          <FlatList
            // columnWrapperStyle={{justifyContent: 'center', alignItems: 'center'}}
            data={this.state.products}
            numColumn={2}
            renderItem={({item}) => 
            <Card item={item} />}
            keyExtractor={({id}, index) => id.toString()}
          />
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => this.props.navigation.navigate('AddProduct')}>
            <Text style={{fontSize: 45}}>+</Text>
          </TouchableOpacity>
      </LinearGradient>
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0984e3',
    padding: 11,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
  input: {
    marginTop: 10,
    marginLeft: 50,
    height: 40,
    backgroundColor: '#747d8c',
    marginBottom: 10,
    color: '#2f3542',
    paddingHorizontal: 10,
    borderRadius: 100,
    width: 290
},
  text: {
    color: '#fff',
  },
  buttonAdd: {
    position: 'absolute',
              backgroundColor: '#00cec9',
              width: 55,
              height: 55,
              left: 340,
              top: 540,
              borderRadius: 100,
              alignItems: 'center',
  }
});
export default ListProduct;

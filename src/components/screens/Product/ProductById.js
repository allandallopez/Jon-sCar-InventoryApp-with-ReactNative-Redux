import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, FlatList, AsyncStorage, Text, Image, TouchableOpacity, } from 'react-native';
import {getProductById, deleteProduct} from '../../../public/actions/products';
import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
import {NavigationEvents, withNavigation} from 'react-navigation';
import {Button} from 'react-native-elements';

import Card from '../items/Card';
import axios from 'axios';

export class ProductById extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const id = this.props.navigation.getParam('id');
    await this.props.dispatch(getProductById(id));
    this.setState({
      products: this.props.products.productList.data.data,
    });
    console.log(this.state)
  }

  handlerSubmit = async () => {
    const id = this.props.navigation.getParam('id');
    await this.props.dispatch(deleteProduct(id));
    alert('this product has been deleteds');
    this.props.navigation.navigate('ListProduct');
  };

  render() {
    const item = this.state.products;
    return (
      <React.Fragment>
        {/* <View style={{flex: 1, backgroundColor : '#54a0ff'}}> */}
        <LinearGradient colors={['#dff9fb', '#22a6b3']} style={styles.container}>

          <FlatList
            style={styles.container}
            data={this.state.products}
            keyExtractor={({id}, index) => id.toString()}
            renderItem={({item}) => (
              <ScrollView>
                <View style={{padding: 15}}>
                  <NavigationEvents onDidFocus={() => getProductById()} />
                  <View style={{alignItems: 'center'}}>
                    <View>
                      <Image
                        source={{uri: item.image}}
                        style={{width: 350, height: 350, borderRadius: 50}}
                        resizeMode="contain"

                      />
                    </View>
                  </View>
                  <View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.title}>{item.name}</Text>
                    </View>
                    <View>
                      <Text style={styles.text}>
                        Category: {item.id}
                      </Text>
                      <Text style={styles.text}>Quantity: {item.quantity}</Text>
                      <Text style={styles.text}>Description: </Text>
                      <Text numRows={1} style={styles.text}>{item.description}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      paddingBottom: 150,
                    }}>
                    <TouchableOpacity
                      style={{
                        height: 35,
                        width: 70,
                        margin: 10,
                        padding: 10,
                        backgroundColor: '#00cec9',
                        alignItems: 'center',
                        borderRadius: 5,
                      }}
                      onPress={() =>
                        this.props.navigation.navigate('EditProduct', {
                          id: item.id,
                        })
                      }>
                      <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        height: 35,
                        width: 70,
                        margin: 10,
                        padding: 10,
                        backgroundColor: '#00cec9',
                        alignItems: 'center',
                        borderRadius: 5,
                      }}
                      onPress={() => this.handlerSubmit()}>
                      <Text>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            )}
            />
        {/* </View> */}
    </LinearGradient>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#54a0ff',
    padding: 11,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },
  text: {
    paddingBottom: 5,
    fontSize: 16,
  },
  button: {
    height: 35,
    width: 70,
    padding: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    borderRadius: 5,
  },
});

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};
export default withNavigation(connect(mapStateToProps)(ProductById));

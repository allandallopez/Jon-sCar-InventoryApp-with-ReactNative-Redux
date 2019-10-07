import React, {Component} from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {connect} from 'react-redux';
import {addProduct} from '../../../public/actions/products';
import {withNavigation} from 'react-navigation';

class AddProduct extends Component {
  static navigationOptions = {
    title: 'Add Product',
  };

  state = {
    name: '',
    description: '',
    image: '',
    id: '',
    quantity: '',
  };

  handlerSubmit = async () => {
    await this.props.dispatch(addProduct(this.state));
    alert('New Product Added!');
    this.props.navigation.navigate('ListProduct');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name Product"
          name="name"
          onChangeText={name => this.setState({name})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Description"
          name="description"
          onChangeText={description => this.setState({description})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Image"
          name="image"
          onChangeText={image => this.setState({image})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="ID Category"
          name="id"
          onChangeText={id => this.setState({id})}
        />

        <TextInput
          style={styles.input}
          type="numeric"
          underlineColorAndroid="transparent"
          placeholder="Quantity"
          name="quantity"
          onChangeText={quantity => this.setState({quantity})}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.handlerSubmit()}>
          <Text style={styles.submitButtonText}> Add Product </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    backgroundColor: '#dfe6e9',
    marginBottom: 100,
    height: 1000
  },
  input: {
    margin: 15,
    marginBottom: 0,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
    backgroundColor: '#b2bec3'
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#636e72',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 4,
    width: 250,
    marginLeft: 90
  },
  submitButtonText: {
    color: 'black',
  },
  form: {
    justifyContent: 'space-between',
  },
});

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

export default withNavigation(connect(mapStateToProps)(AddProduct));

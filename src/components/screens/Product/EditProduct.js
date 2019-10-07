import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, FlatList, AsyncStorage, Text, Image, TouchableOpacity, TextInput, Picker} from 'react-native';
import {editProduct, getProductById} from '../../../public/actions/products';

import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
// import { Picker } from 'native-base';

export class EditProduct extends Component {
  state = {
    name: '',
    description: '',
    image: '',
    id_category: '',
    quantity: ''    
  };

  async componentDidMount() {
    const id = this.props.navigation.getParam('id');
    await this.props.dispatch(getProductById(id));
    this.setState({
      name: this.props.products.productList.data.data[0].name,
      description: this.props.products.productList.data.data[0].description,
      image: this.props.products.productList.data.data[0].image,
      id_category: this.props.products.productList.data.data[0].id_category,
      quantity: this.props.products.productList.data.data[0].quantity
    });
    console.log(this.state);
  }

  handlerSubmit = async () => {
    const id = this.props.navigation.getParam('id');
    console.log(id);
    console.log(this.state);
    await this.props.dispatch(editProduct(id, this.state));
    alert('Data Updated!');
    this.props.navigation.navigate('ListProduct');
  };

  render() {
    const item = this.state.products;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name Product"
          name="name"
          value={this.state.name}
          onChangeText={name => this.setState({name})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Description"
          name="description"
          value={this.state.description}
          onChangeText={description => this.setState({description})}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Image"
          name="image"
          value={this.state.image}
          onChangeText={image => this.setState({image})}
        />

        {/* <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          type="numeric"
          placeholder="ID Category"
          name="id_category"
          value={`${this.state.id_category}`}
          onChangeText={id_category => this.setState({id_category})}
          /> */}
          <TouchableOpacity 
          style={{
            paddingLeft: 0,
            backgroundColor: '#74b9ff',
            width: 392,
            marginTop: 10,
            marginLeft: 16,
            borderRadius: 4

            }}>  
          <Picker
          selectedValue={this.state.id_category}
          value={this.state.id_category}
          onValueChange={id_category => this.setState({id_category})}
          type="numeric">
          <Picker.item label='Vehicle' value='1'/>
          <Picker.item label='Electronic' value='2'/>
          <Picker.item label='Outfit' value='6'/>
          <Picker.item label='Food' value='7'/>          
          </Picker>
          </TouchableOpacity>

        <TextInput
          style={styles.input}
          type="numeric"
          underlineColorAndroid="transparent"
          placeholder="Quantity"
          name="quantity"
          keyboardType={'numeric'}
          value={`${this.state.quantity}`}
          onChangeText={quantity => this.setState({quantity})}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.handlerSubmit()}>
          <Text style={styles.submitButtonText}> Edit Product </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    marginBottom: 0,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#0abde3',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 4,
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
export default withNavigation(connect(mapStateToProps)(EditProduct));

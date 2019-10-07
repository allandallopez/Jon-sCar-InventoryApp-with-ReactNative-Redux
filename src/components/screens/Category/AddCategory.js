import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {addCategory} from '../../../public/actions/categories';
import {withNavigation} from 'react-navigation';

class AddCategory extends Component {
  static navigationOptions = {
    title: 'Add Category',
  };

  state = {
    category: '',
  };

  handlerSubmit = async () => {
    await this.props.dispatch(addCategory(this.state));
    alert('New Product Added!');
    this.props.navigation.navigate('Categories');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Category"
          name="category"
          onChangeText={category => this.setState({category})}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.handlerSubmit()}>
          <Text style={styles.submitButtonText}> Add Category </Text>
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
    backgroundColor: '#F5DEB3',
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
    categories: state.categories,
  };
};

export default withNavigation(connect(mapStateToProps)(AddCategory));
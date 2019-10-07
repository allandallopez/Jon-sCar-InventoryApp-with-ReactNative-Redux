import React, {Component} from 'react';
import { StyleSheet, AsyncStorage, Text } from 'react-native';
import {deleteProduct} from '../../../public/actions/products';

import {connect} from 'react-redux';
import {NavigationEvents, withNavigation} from 'react-navigation';
import {Button} from 'react-native-elements';

export class DeleteProduct extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const id = this.props.navigation.getParam('id');
    await this.props.dispatch(deleteProduct(id));;
  }

  render() {
    const item = this.state.products;
    return (
      <React.Fragment>
        <Text>product berhasil dihapus</Text>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
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
export default withNavigation(connect(mapStateToProps)(DeleteProduct));

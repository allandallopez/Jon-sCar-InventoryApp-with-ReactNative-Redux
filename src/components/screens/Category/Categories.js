import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';

import {NavigationEvents, withNavigation} from 'react-navigation';
import axios from 'axios';

export class Categories extends Component {
  static navigationOptions = {
    title: 'Categories',
  };

  state = {
    categories: [],
  };

  
  getCategories() {
    axios.get(`/category`).then(response =>
    this.setState({
      categories: response.data.data,
    }),
    );
  }
  
  componentDidMount() {
    this.getCategories();
  }

  render() {
    const item = this.state.categories;
    return (
      <React.Fragment>
        <NavigationEvents
          onDidFocus={() => {
            this.getCategories();
          }}
        />
        {/* <View
          style={{flex: 1, backgroundColor: '#f1f2f6', position: 'relative'}}> */}
          <LinearGradient colors={['#dff9fb', '#22a6b3']} style={styles.container}>

          <FlatList
            style={styles.container}
            data={this.state.categories}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 40,
                  backgroundColor: '#f0e0d0',
                  margin: 10,
                  alignItems: 'center',
                  paddingTop: 5,
                  borderRadius: 7,
                }}
                onPress={() =>
                  this.props.navigation.navigate('CategoryById', {
                    id: item.id,
                  })
                }>
                <Text style={{fontSize: 20}}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={({id}, index) => id.toString()}
          />

          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => this.props.navigation.navigate('AddCategory')}>
            <Text style={{fontSize: 45}}>+</Text>
          </TouchableOpacity>
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
    color: '#fff',
  },
  buttonAdd: {
    position: 'absolute',
              backgroundColor: '#1B9CFC',
              width: 55,
              height: 55,
              left: 330,
              top: 600,
              borderRadius: 100,
              alignItems: 'center',
  }
});

export default withNavigation(Categories);
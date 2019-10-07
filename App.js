import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Icon} from 'react-native-elements';
import {createLogger} from 'redux-logger';
import Rpm from 'redux-promise-middleware';
import reducer from './src/public/reducers/index';
import {Provider} from 'react-redux';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AddProduct from './src/components/screens/Product/AddProduct';
import ListProduct from './src/components/screens/Product/ListProduct';
import ProductById from './src/components/screens/Product/ProductById';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import EditProduct from './src/components/screens/Product/EditProduct';
import DeleteProduct from './src/components/screens/Product/DeleteProduct';
import Login from './src/components/screens/User/Login';
import SplashScreen from './src/components/screens/items/Splash'
import Logout from './src/components/screens/User/Profile';
import Register from './src/components/screens/User/Register';
import Home from './src/components/screens/Product/ListProduct';
import Categories from './src/components/screens/Category/Categories'
import AddCategory from './src/components/screens/Category/AddCategory'
import CategoryById from './src/components/screens/Category/CategoryById'
import EditCategory from './src/components/screens/Category/EditCategory'
import axios from 'axios'

axios.defaults.baseURL = 'http:/192.168.1.20:4000/'

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger, Rpm));

const Routes = createStackNavigator(
  {
    ProductById,
    AddProduct,
    ListProduct,
    EditProduct,
    DeleteProduct,
    AddCategory,
    CategoryById,
    EditCategory
  },
  {
    initialRouteName: 'ListProduct',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
);


const MainNavigator = createBottomTabNavigator(
  {
    Home : Routes,
    Categories,
    Logout,
  },
  
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          return (
            <Icon
              name="home"
              style={{
                width: 20,
                height: 20,
              }}
            />
          );
        }
        if (routeName === 'Categories') {
          return (
            <Icon
              name="dashboard"
              style={{
                width: 20,
                height: 20,
              }}
            />
          );
        }
        if (routeName === 'other') {
          return <Icon name="view-carousel" style={{width: 20, height: 20}} />;
        } else {
          return <Icon name="face" style={{width: 20, height: 20}} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#7ed6df',
      inactiveTintColor: '#263238',
      style: {
        backgroundColor: '#00b894',
      }
    },
  },
);

const AuthNavigator = createSwitchNavigator(
  {
    SplashScreen,
    Login,
    Register,
    App: MainNavigator,
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

const Navigation = createAppContainer(AuthNavigator);

const App = props => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
  
};
export default App;

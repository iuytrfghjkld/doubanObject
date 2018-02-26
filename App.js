/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import BookNavigation from './views/book/book-navigation'
import MovieNavigation from './views/movie/movie_navigation'
import Movie from './views/movie/movie'

const DoubanProject=TabNavigator({
    Book:{
      screen:BookNavigation,
      tabBarLabel:'book'
    },
    Movie:{
        screen:MovieNavigation,
        tabBarLabel:'book'
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Book') {
                    iconName = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519641110986&di=da158186bad0b1f4f0b7f0cbfec04568&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D77fdf6ad052442a7ba03f5e6b92ac73e%2Fd833c895d143ad4b38bf8aee88025aafa40f060f.jpg';
                } else if (routeName === 'Movie') {
                    iconName = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519644233306&di=43c0e4276cf89c3ab0bd571da7427975&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd439b6003af33a87a9a82727cd5c10385243b5c1.jpg';
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return                 <Image
                    style={{width:20,height:20}}
                    source={{uri : iconName}}
                />
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    })

export default class App extends Component {
  render() {
    return (
        <DoubanProject/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

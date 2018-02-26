import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Navigator,
    Image
} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import MovieList from './movie_list'
import MovieDetail from './movie_detail'



const MovieNavigation = StackNavigator({
    MovieList: {
        screen: MovieList,
        navigationOptions:{
            header:null,
        }
    },
    MovieDetail: {
        screen: MovieDetail,
    },
});

export default MovieNavigation
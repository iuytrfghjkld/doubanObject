import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Navigator,
    Image
} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import BookList from './book_list'
import BookDetail from './book_detail'


const BookNavigation = StackNavigator({
        BookList: {
            screen: BookList,
            navigationOptions:{
                header:null,
            }
        },
        BookDetail: {
            screen: BookDetail,
        },
    });

export default BookNavigation
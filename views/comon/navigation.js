import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Navigator,
    Image
} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
const Routers = StackNavigator({
        One: {
            screen: OnePage,
            navigationOptions:{
                title:'详情2',
                headerBackTitle:null,
            }
        },
        Two: {
            screen: TwoPage,
        },

    });

export default Routers
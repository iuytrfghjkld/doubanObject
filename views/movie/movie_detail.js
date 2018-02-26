import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    WebView
} from 'react-native';

export default class MovieDetail extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: navigation.state.params?navigation.state.params.title:null,
    });
    render() {
        return (
            <View style={{backgroundColor:'#FFF',flex:1}}>
                <WebView
                    startInLoadingState ={true}
                    contentInset={{top:-44,bottom:-120}}
                    source={{uri:this.props.navigation.state.params.url}}
                />
            </View>
        );
    }
}

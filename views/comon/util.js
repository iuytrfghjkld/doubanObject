import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,//用于获取设备的宽高
    ActivityIndicator
} from 'react-native';

const {width,height} =Dimensions.get('window');
const Util={
    width:width,
    height:height,
    getRequest: (url,successCallback,errorCallback)=>{
        fetch(url)
            .then((response)=>response.json())
            .then((responseData)=>{
                successCallback(responseData)
            })
            .catch((error)=>{
                errorCallback(error)
            })
    },
    loading:<ActivityIndicator style={{marginTop:200}}></ActivityIndicator>
}
export default Util
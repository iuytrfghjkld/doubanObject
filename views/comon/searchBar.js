import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class SearchBar extends Component {

    render() {
        return (
            <View style={styles.contianer}>
                <View style={styles.inputcontianer}>
                    <TextInput underlineColorAndroid='transparent' style={styles.input} {...this.props}></TextInput>
                </View>
                <TouchableOpacity style={styles.btn} {...this.props}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contianer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        height:44,
        marginTop:10
    },
    inputcontianer:{
        flex:1,
        marginLeft:5
    },
    input:{
        flex:1,
        height:44,
        borderWidth:1,
        borderColor:'#CCC',
        borderRadius:4,
        paddingLeft:5
    },
    btn:{
        width:55,
        height:44,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:5,
        marginRight:5,
        backgroundColor:'#23BEFF',
        borderRadius:4
    },
    search:{
        flex:1,
        color:'#fff',
        fontSize:15,
        fontWeight:"bold",
        textAlign:'center',
        lineHeight:44
    }
});

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import Util from '../comon/util'
import DoubanApis from '../comon/servics'
import BookItem from './book_item'

export default class BookDetail extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle: navigation.state.params?navigation.state.params.title:null,
    });

    constructor(props){
        super(props)
        this.state={
            bookData:null
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        const that=this
        const bookID=this.props.navigation.state.params.bookID
        const url=DoubanApis.book_detail_id+bookID
        Util.getRequest(url,function (data) {
            that.setState({
                bookData:data
            })
        },function (err) {
            alert(err)
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.state.bookData?
                    <View>
                        <BookItem book={this.state.bookData}/>
                        <View>
                            <Text style={styles.title}>图书简介</Text>
                            <Text style={styles.text}>{this.state.bookData.summary}</Text>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={styles.title}>作者简介</Text>
                            <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
                        </View>
                        <View style={{height:50}}></View>
                    </View>
                    :Util.loading
                }

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    title:{
        margin:10,
        fontSize:16,
        fontWeight:'700'
    },
    text:{
        marginLeft:10,
        marginRight:10,
        color:'#000D22'
    }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView
} from 'react-native';
import Util from '../comon/util'
import DoubanApis from '../comon/servics'
import SearchBar from '../comon/searchBar'
import BookItem from './book_item'


export default class BookList extends Component {
    constructor(props){
        super(props)
        this.state={
            dataSource:[],
            show:false,
            keyWords:'react'
        }
        this.getData=this.getData.bind(this)
        this._renderRows=this._renderRows.bind(this)
        this._renderSeparator=this._renderSeparator.bind(this)
        this._changeText=this._changeText.bind(this)
    }
    componentDidMount(){
        this.getData()
    }
    _keyExtractor = (item, index) => item.id;
    getData(){
        const that=this
        this.setState({show:false})
        const url=DoubanApis.bookSearch+'?count=20&q='+this.state.keyWords
        Util.getRequest(url,function (data) {
            if (!data.books || data.books.length==0){
                return alert('未查到对应书籍')
            }
            that.setState({
                dataSource:data.books,
                show:true,
            })

        },function (err) {
            alert(err)
        })
    }
    _renderRows({item}){
        return <BookItem book={item} onPress={()=>this.props.navigation.navigate('BookDetail',{'bookID':item.id,'title':item.title})}/>
    }
    _renderSeparator(section:number,rowId:number){
        const style={height:1,backgroundColor:'#CCC'}
        return <View style={style} key={section+rowId}/>
    }
    _changeText(text){
        this.setState({
            keyWords:text
        })
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#fff'}}>
                <SearchBar placholder='请输入图书名称' onChangeText={this._changeText} onPress={this.getData}/>
                {this.state.show?
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={this._renderRows}
                        keyExtractor={this._keyExtractor}
                        ItemSeparatorComponent={this._renderSeparator}
                    />
                    :Util.loading
                }

            </ScrollView>
        );
    }
}


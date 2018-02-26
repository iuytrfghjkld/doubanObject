
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    FlatList
} from 'react-native';
import Util from '../comon/util'
import DoubanApis from '../comon/servics'
import SearchBar from '../comon/searchBar'
import MovieItem from './movie_item'

export default class MovieList extends Component {
    constructor(props){
        super(props)
        this.state={
            dataSource:[],
            show:false,
            keyWords:'哈利波特'
        }
        this._renderRows=this._renderRows.bind(this)
        this._renderSeparator=this._renderSeparator.bind(this)
        this._changeText=this._changeText.bind(this)
        this.getData=this.getData.bind(this)
    }
    componentDidMount(){
        this.getData()
    }
    _keyExtractor = (item, index) => item.id;
    _renderRows({item}){
       return <MovieItem movie={item} onPress={()=>this.props.navigation.navigate('MovieDetail',{'url':item.alt,'title':item.title})}/>
    }
    _renderSeparator(section:number,rowId:number){
        const style={height:1,backgroundColor:'#CCC'}
        return <View style={style} key={section+rowId}/>
    }
    _changeText(text){
        this.setState({keyWords:text})
    }
    getData(){
        const that=this
        this.setState({
            show:false
        })
        const url=DoubanApis.movieSearch+'?count=20&q='+this.state.keyWords
        Util.getRequest(url,function (data) {
            if (!data.subjects||data.subjects.length==0){
                return alert('未找到相关电影')
            }
            that.setState({
                dataSource:data.subjects,
                show:true
            })
        },function (err) {
            alert(err)
        })
    }
    render() {
        return (
            <ScrollView>
                <SearchBar placholder='请输入电影名称' onChangeText={this._changeText} onPress={this.getData}></SearchBar>
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

//接口API
const BaseUrl='https://api.douban.com/v2/'
const DoubanApis={
    //图书搜索
    bookSearch:BaseUrl+'book/search',
    //图书详情
    book_detail_id:BaseUrl+'/book/',
    //电影搜索
    movieSearch:BaseUrl+'movie/search'
}

export default DoubanApis
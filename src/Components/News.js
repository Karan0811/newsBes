import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page : 1,
      totalResults:0,
      loading : false
    };
  }
  async componentDidMount(){
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e75c21ec1a0b418d9c217b023319f822&page=1&pageSize={this.props.pageSize}`);
    this.setState({
      loading : true
    });
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      totalResults: parsedData.totalResults,
      loading : false
    })
    console.log(this.state)
  }
  handlePrevClick = async ()=>{
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e75c21ec1a0b418d9c217b023319f822&page=${this.state.page - 1}&pageSize={this.props.pageSize}`);
    this.setState({
      loading : true
    });
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page : this.state.page - 1,
      loading : false
    })

}

handleNextClick = async ()=>{
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e75c21ec1a0b418d9c217b023319f822&page=${this.state.page + 1}&pageSize={this.props.pageSize}`);
    this.setState({
      loading : true
    });
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page : this.state.page + 1,
      loading: false
    })
}


  render() {
    return (
      <div className='container'>
        <h1 className="text-center">NEWSBES : Get latest News</h1>
        {this.state.loading && <Spinner/>}
        <div className='row my-3'>
          {!this.state.loading && this.state.articles.map((element) => (
            <div className='col-md-4' key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                newsUrl={element.url}
                imageUrl={element.urlToImage}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      
    );
  }
}

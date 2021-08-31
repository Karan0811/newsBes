import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div>
        <div className='card'>
          <img src={imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market-770x433.png"} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
              Full Story
            </a>
          </div>
        </div>
      </div>
    );
  }
}

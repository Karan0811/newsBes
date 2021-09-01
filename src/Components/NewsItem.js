import React, { Component } from 'react';

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;

    return (
      <div>
        <div className='card m-3'>
          <img
            src={
              imageUrl
                ? imageUrl
                : 'https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market-770x433.png'
            }
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <span
              className='position-absolute top-0 translate-middle badge rounded-pill bg-danger'
              style={{ zIndex: 1, left: '15%' }}
            >
              {source}
            </span>

            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <p className='card-text'>
              <small className='text-muted'>
                From {author ? author : 'Unknown'} Published At{' '}
                {new Date(publishedAt).toDateString()}{' '}
              </small>
            </p>
            <a
              href={newsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'
            >
              Full Story
            </a>
          </div>
        </div>
      </div>
    );
  }
}

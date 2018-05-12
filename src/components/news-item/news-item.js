import React from 'react';
import './news-item.css';

const NewsItem = ({item}) => {
    return (
        <div className="news-card">
            <div className="title">{item.title}</div>
            <div>{item.feed}</div>
        </div>
    );
};

export default NewsItem;
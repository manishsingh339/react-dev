import React from 'react';
import NewsItem from '../news-item/news-item';

const NewsList = (props)=>{
    const items = props.news.map((item)=>{
        return (
            <NewsItem item={item} key={item.id} />
        );
    });
    console.log(items);
    return(
        <div>
            {items}
        </div>
    );
}
export default NewsList;
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

// css
import './style.css'

// Components
import Header from './components/header/header';
import NewsList from './components/news-list/news-list';

class App extends Component {
    news = [];
    keyWord = "";
    
    constructor(){
        super();
        this.news = JSON;
    }

    state = {
        filteredNews: []
    }

    getKeyWords = ($event) => {
        let keyWord = $event.target.value;
        keyWord = keyWord.toUpperCase();
        let filteredNews = this.news.filter((item)=>{
            return (item.title.toUpperCase().indexOf(keyWord) >= 0);
        });
        this.setState({
            filteredNews
        });
        this.keyWord = keyWord;
    }

    render() {
        let newsList = !!this.keyWord ? this.state.filteredNews : this.news;
        return (
            <div>
                <Header onKeyWordChange={this.getKeyWords} />
                <NewsList news={newsList} />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
import React, {Component} from 'react';
import Article from './article';
import HackerNewsApi from '../constants/HackerNewsApi';
import * as ReactDOM from "react-dom";

/*
 Component that handles results from the Hacker News API
 Use componentDidMount
 Call API to get all articles here
 Listen to scroll position to load correct amount of articles
 */

class Articles extends Component {

    state = {
        isLoading: true,
        articles: [],
        articlesRendered: []
    };

    componentDidMount() {

        fetch(HackerNewsApi.ENDPOINTS[HackerNewsApi.BEST_STORIES])
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: false,
                    articles: json
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.state.isLoading === false) {
            this.renderArticles();
        }
    }

    renderArticles() {

        let articleCountToLoad = this.calculateArticleAmountToLoad();

        for (let i = 0; i < articleCountToLoad; i++) {
            this.renderArticle(this.state.articles.shift());
        }
    }

    renderArticle(id) {
        let newArticle = document.createElement('div');
        newArticle.setAttribute('id', 'article-'+id);
        document.getElementById('articleContainer').appendChild(newArticle);
        ReactDOM.render(<Article articleId={id} />, document.getElementById('article-'+id))
    }

    calculateArticleAmountToLoad() {
        return 10;
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <div className='loading'>loading!</div> : <div className='articleContainer' id='articleContainer'>Articles</div>}
            </div>
        )
    }
}

export default Articles;

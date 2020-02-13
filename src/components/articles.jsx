import React, {Component} from 'react';
import Article from './article';
import HackerNewsApi from '../constants/HackerNewsApi';
import LazyLoadSettings from '../constants/LazyLoadSettings';
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
        articlesRendered: [],
        articleTotal: 0
    };

    componentDidMount() {

        fetch(HackerNewsApi.ENDPOINTS[HackerNewsApi.BEST_STORIES])
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: false,
                    articles: json,
                    articleTotal: json.length
                })
                window.addEventListener('scroll', this.handleScroll, true);
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.isLoading === false) {
            this.renderArticles();
        }
    }

    renderArticles() {

        let articleCountToLoad = this.calculateArticleAmountToLoad();

        for (let i = 0; i < articleCountToLoad; i++) {
            let articleToRender = this.state.articles.shift();
            this.renderArticle(articleToRender);
            this.state.articlesRendered.push(articleToRender);
        }
    }

    renderArticle(id) {
        let newArticle = document.createElement('div');
        newArticle.setAttribute('id', 'article-' + id);
        document.getElementById('articleContainer').appendChild(newArticle);
        ReactDOM.render(<Article articleId={id}/>, document.getElementById('article-' + id))
    }

    calculateArticleAmountToLoad() {
        let windowHeight = window.innerHeight;
        let documentHeight = document.body.scrollHeight;
        let scrollTop = window.scrollY;
        let heightToLoad = 0;

        // We haven't rendered anything, load the first list and the first off screen set.
        if (this.state.articlesRendered.length === 0) {
            heightToLoad = windowHeight + LazyLoadSettings.OFF_SCREEN_HEIGHT_TO_LOAD;
            console.log('hello' + heightToLoad);
        } else {
            heightToLoad = documentHeight - (scrollTop + windowHeight + LazyLoadSettings.OFF_SCREEN_HEIGHT_TO_LOAD);
            console.log(documentHeight);
            console.log(heightToLoad);
            if (heightToLoad < 0) {
                heightToLoad = Math.abs(heightToLoad);
            } else {
                heightToLoad = 0;
            }
        }


        return Math.floor(heightToLoad / LazyLoadSettings.HEIGHT_OF_ARTICLES);
    }

    handleScroll = () => {
        this.renderArticles();
    };

    render() {
        return (
            <div>
                {this.state.isLoading ? <div className='loading'>loading!</div> :
                    <div className='articleContainer' id='articleContainer'>Articles</div>}
            </div>
        )
    }
}

export default Articles;

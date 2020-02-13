import React, {Component} from 'react';
import HackerNewsApi from '../constants/HackerNewsApi';

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

    render() {
        return (
            <div>
                {this.state.isLoading ? <div className='loading'>loading!</div> : <div className='articleContainer'>{this.state.articles}</div>}
            </div>
        )
    }

    renderArticles() {

    }

    renderArticle(id) {

    }
}

export default Articles;

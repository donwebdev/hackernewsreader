import React, {Component} from 'react';
import HackerNewsApi from '../constants/HackerNewsApi';

/*
 Component that handles results from the Hacker News API
 Use componentDidMount
 Call API to get all articles here
 Listen to scroll position to load correct amount of articles
 */

class Articles extends Component
{
    render() {
        let hello = HackerNewsApi.BEST_STORIES;
        return (
            <div>
                articles
            </div>
        );
    }
}

export default Articles;

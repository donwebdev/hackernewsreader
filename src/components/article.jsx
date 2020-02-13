import React, {Component} from 'react';
import HackerNewsApi from  'constants/HackerNewsApi';

/*
 Component receives an id from article
 Call componentDidMount on id to load the article
 */

class Article extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return(<div className="article">{this.props.articleId}</div>)
    }
}

export default Article;

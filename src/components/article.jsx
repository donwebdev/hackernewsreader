import React, {Component} from 'react';
import HackerNewsApi from '../constants/HackerNewsApi';

/*
 Component receives an id from article
 Call componentDidMount on id to load the article
 */

class Article extends Component
{
    state = {
        isLoading: true,
        article: {title: 'null'}
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        fetch(HackerNewsApi.ENDPOINTS[HackerNewsApi.ITEM] + HackerNewsApi.SEPARATOR + this.props.articleId + HackerNewsApi.EXTENSION)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: false,
                    article: json
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoading ? <div className='loading'>loading!</div> :
                    <div className='article'>{this.state.article.title}</div>
                }
            </div>
        )
    }
}

export default Article;

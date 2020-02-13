import React, {Component} from 'react';
import HackerNewsApi from '../constants/HackerNewsApi';

/*

 Article Component

 Requires an article id
 Gets an article from the API and then renders that articles details

 */

class Article extends Component
{
    state = {
        isLoading: true,
        article: {}
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

        // This would be handled in a utility somewhere else
        const t = new Date( this.state.article.time * 1000 );
        this.state.article.time = (t.getMonth() + 1) + '/' + t.getDate() + '/' + t.getFullYear() + ' ' + ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);

        return (
            <div>
                {
                    this.state.isLoading ? <div className='loading'>Loading...</div> :
                    <a className='article' href={this.state.article.url} target='_blank'>
                        <div className='title'>{this.state.article.title}</div>
                        <div className='timePosted'>{this.state.article.time}</div>
                        <div className='byline'>By {this.state.article.by}</div>
                    </a>
                }
            </div>
        )
    }
}

export default Article;

/*
 Constants for defining API endpoints for Hacker News
 */

class HackerNewsApi {

    static BASE_URL = 'https://hacker-news.firebaseio.com';
    static API_VERSION = 'v0';
    static TOP_STORIES = 'topstories';
    static BEST_STORIES = 'beststories';
    static NEW_STORIES = 'newstories';
    static ASK_STORIES = 'askstories';
    static ITEM = 'item';
    static SEPARATOR = '/';
    static EXTENSION = '.json';
    static ENDPOINTS = {
        [this.TOP_STORIES]: [this.BASE_URL, this.API_VERSION, this.TOP_STORIES].join(this.SEPARATOR) + this.EXTENSION,
        [this.BEST_STORIES]: [this.BASE_URL, this.API_VERSION, this.BEST_STORIES].join(this.SEPARATOR) + this.EXTENSION,
        [this.NEW_STORIES]: [this.BASE_URL, this.API_VERSION, this.NEW_STORIES].join(this.SEPARATOR) + this.EXTENSION,
        [this.ASK_STORIES]: [this.BASE_URL, this.API_VERSION, this.ASK_STORIES].join(this.SEPARATOR) + this.EXTENSION,
        [this.ITEM]: [this.BASE_URL, this.API_VERSION, this.ITEM].join(this.SEPARATOR)
    };
}

export default HackerNewsApi;

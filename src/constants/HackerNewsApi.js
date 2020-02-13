/*
 Constants for defining API endpoints for Hacker News
 */

class HackerNewsApi {

    BASE_URL = 'https://hacker-news.firebaseio.com';
    API_VERSION = 'v0';
    TOP_STORIES = 'topstories';
    BEST_STORIES = 'beststories';
    NEW_STORIES = 'newstories';
    ASK_STORIES = 'askstories';
    ITEM = 'item';
    SEPARATOR = '/';
    EXTENSION = '.json';
    ENDPOINT_TOP_STORIES = [this.BASE_URL, this.API_VERSION, this.TOP_STORIES].join(this.SEPARATOR);
    ENDPOINT_BEST_STORIES = [this.BASE_URL, this.API_VERSION, this.BEST_STORIES].join(this.SEPARATOR);
    ENDPOINT_NEW_STORIES = [this.BASE_URL, this.API_VERSION, this.NEW_STORIES].join(this.SEPARATOR);
    ENDPOINT_ASK_STORIES = [this.BASE_URL, this.API_VERSION, this.ASK_STORIES].join(this.SEPARATOR);
    ENDPOINT_ITEM = [this.BASE_URL, this.API_VERSION, this.ITEM].join(this.SEPARATOR);

}

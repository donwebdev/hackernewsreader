import React, {Component} from 'react';

/*
 Stateless component
 Header is attached to top of window
 Header should have a refresh button
 Header should show how many articles have been read versus fetched - this info stored in Articles Component State
 */

class Header extends Component
{
    render() {
        return <div className='header'>WHCC Hacker News Reader</div>
    }
}

export default Header;

import React, {Component} from 'react';

/*
 Stateless functional component
 Header is attached to top of window
 Header should have a refresh button
 Maybe animate header getting smaller when you scroll
 */

class Header extends Component
{
    render() {
        return <div className='header'>WHCC Hacker News Reader</div>
    }
}

export default Header;

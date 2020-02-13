import React, {Component} from 'react';

/*
 Stateless component
 Footer is attached to bottom of the window
 */

class Footer extends Component
{
    render() {
        let d = new Date();
        return <div className='footer'>&copy;{d.getFullYear()} By <a href="mailto:don@fullstackdon.com">Don Westendorp</a></div>
    }
}

export default Footer;

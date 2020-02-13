import React, {Component} from 'react';
import Header from './components/header';
import Articles from './components/articles';
import Footer from './components/footer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header/>
                <Articles/>
                <Footer/>
            </div>
        )
    }
}

export default App;

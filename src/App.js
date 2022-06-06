import React from 'react'

import { Article, Cta, Navbar, Repos } from './components';
import { Footer, Header, Project } from './containers';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Project />
            <Footer />
        </div>

    )
}

export default App
import React from 'react'

import { Article, Cta, Navbar, Repos, Highlight } from './components';
import { Footer, Header, Projects, Skills } from './containers';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Skills />
            <Projects />
            <Footer />
        </div>

    )
}

export default App
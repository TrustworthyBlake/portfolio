import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="project__header section__padding" id="home">
      <div className='project__header-content'>
        <h1 className='gradient__text'>Andreas Blakli</h1>
        <p>Her ligger porteføljen min og informasjon om programmerings ferdighetene mine.</p>
        {/*<p>Dette nettstedet inneholder informasjon om programmerings ferdighetene mine og porteføljen min.</p>*/}
        <p></p>        
      </div>
    </div>
  )
}

export default Header
import React from 'react';
import './highlight.css';

const Highlight = ({title, text}) => {
  return (
    <div className="project__highlights-container__highlight">
        <div className="project__highlights-container__highlight-title">            
        <div />
        <h1>{title}</h1>
        </div>
        <div className='project__highlights-container__highlight-text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Highlight
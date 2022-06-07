import React from 'react';
import './repo.css';

const Repo = ({title, text, repoUrl}) => {
  return (
    <div className='project__repo'>
      <div className='project__repo-container'>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
      <h1>{title}</h1>
      <p>{text}</p>
      </a>
      </div>
    </div>
  )
}

export default Repo
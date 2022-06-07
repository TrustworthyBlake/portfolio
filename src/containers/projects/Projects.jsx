import React from 'react';
import {Repo} from '../../components';
import './projects.css';

const Projects = () => {
  return (
    <div className='project__projects section__padding' id="projects">
      <div className='project__projects-heading'>
        <h1 className='gradient__text'>Portefølje</h1>
      </div>
      <div className='project__projects-container'>
        <div className='project__projects-container_group'>
          <Repo title="Test" text="fojf foff fdsafdsd fdadfasdf adsfeaewfa earfafaewfad faefaaeaf eeafsddsf  sdsdffds dsfsdssdsfds s" repoUrl="https://google.com" />
          <Repo title="Test2" text="fojf foff" repoUrl="https://google.com" />
          <Repo title="Test3" text="fojf foff" repoUrl="https://google.com" />
          <Repo title="Test2" text="fojf foff" repoUrl="https://google.com" />
          <Repo title="Test3" text="fojf foff" repoUrl="https://google.com" />
          <Repo title="Test2" text="fojf foff" repoUrl="https://google.com" />
          <Repo title="Test3" text="fojf foff" repoUrl="https://google.com" />
        </div>
      </div>
    </div>
  )
}

export default Projects
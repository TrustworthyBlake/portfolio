import React from 'react'
import Highlight from '../../components/highlight/Highlight';
import './skills.css';

const Skills = () => {
    return (
        <div className="project__skills section__margin" id="skills">
            <div className="project__skills-heading">
                <h1 className='gradient__text'>Ferdigheter</h1>
            </div>

            <div className='project__skills-container'>
                <Highlight title="C/C++" text="Behersker godt." />
                <Highlight title="Kotlin" text="Behersker godt." />
                <Highlight title="GoLang" text="Behersker godt." />
            </div>
            <div className='project__skills-container'>
                <Highlight title="Python" text="Behersker godt." />
                <Highlight title="WIP" text="to-do" />
                <Highlight title="WIP" text="to-do" />                
            </div>
        </div>
    )
}

export default Skills

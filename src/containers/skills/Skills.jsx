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
                <Highlight title="c++" text="fdsadfdsf" />
                <Highlight title="b++" text="fdsadfdsf" />
                <Highlight title="a++" text="fdsadfdsf cxvvvvvvvvvvvvv vdfgfdgggggggggggggggg gggggggggggggggggggg ggggggggggvv vvvvzxcvzcxvzxcv" />
            </div>
            <div className='project__skills-container'>
                <Highlight title="d++" text="fdsadfdsf" />
                <Highlight title="e++" text="fdsadfdsf" />
                <Highlight title="f++" text="fdsadfdsf cxvvvvvvvvvvvvv vdfgfdgggggggggggggggg gggggggggggggggggggg ggggggggggvv vvvvzxcvzcxvzxcv" />
            </div>
        </div>
    )
}

export default Skills

{/*rafce*/ }
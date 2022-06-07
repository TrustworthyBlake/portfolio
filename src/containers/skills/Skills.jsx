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
                <Highlight title="C/C++"
                    text="Behersker godt." />
                <Highlight title="Kotlin"
                    text="Behersker godt." />
                <Highlight title="GoLang"
                    text="Behersker godt. " />
            </div>
            <div className='project__skills-container'>
                <Highlight title="Python" text="Behersker godt." />
                <Highlight title="Bash" text="Har erfaring i bash scripting." />
                <Highlight title={"Matlab"} text={"Har erfaring i Matlab."} />
            </div>
            <div className='project__skills-container'>
                <Highlight title={"SQL og noSQL"} text={"Har erfaring med SQL og noSQL queries."} />
                <Highlight title={"HTML/CSS"} text={"Har noe erfaring i HTML og CSS."} />
                <Highlight title={"Javascript"} text={"Ha noe erfaring."} />
            </div>
            <div className='project__skills-container'>
                <Highlight title={"Applikasjonsutvikling"}
                    text={"Har mye erfaring i applikasjonsutvikling med det objektorienterte og funksjonelle paradigmet. Har brukt  rammeverkene GDX, libKTX, Ashley i språkene C/C++, Kotlin og Python"} />
                <Highlight title={""} text={""} />
                <Highlight title={""} text={"ddd"} />
            </div>
            <div className='project__skills-container'>
                <Highlight title={""} text={""} />
                <Highlight title={""} text={""} />
                <Highlight title={""} text={""} />
                <Highlight title="WIP" text="Har erfaring med RESTful Api integrasjon, distributisjon
                og drifting " />
            </div>
        </div>
    )
}

export default Skills

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
                    text="Behersker godt." />
            </div>
            <div className='project__skills-container'>
                <Highlight title="Python" text="Behersker godt." />
                <Highlight title="Bash" text="Har erfaring i bash scripting." />
                <Highlight title={"Matlab"} text={"Har erfaring."} />
            </div>
            <div className='project__skills-container'>
                <Highlight title={"SQL og noSQL"} text={"Har erfaring med SQL og noSQL queries."} />
                <Highlight title={"HTML/CSS"} text={"Har noe erfaring i HTML og CSS."} />
                <Highlight title={"Javascript"} text={"Ha noe erfaring."} />
            </div>
            <div className='project__skills-container'>
                <Highlight title={"Applikasjonsutvikling"}
                    text={"Har mye erfaring i applikasjonsutvikling for \"Desktop, Mobile and Web\" med det objektorienterte og \
                    funksjonelle paradigmet. I språkene C/C++, Kotlin og Python. Har brukt erafring med \
                    flere rammeverk e.g. GDX, libKTX, Ashley."} />
                <Highlight title={"2D/3D Rendering"} text={"Har erfaring med utvikling av grafikkmotorer i \
                 2D og 3D i rammeverket openGL i C++."} />
                <Highlight title={"Spillmotor"} text={"Er kjent med \"entity component system\" arkitektur for \
                konstruksjon av spillmotor fra grunnen av."} />
            </div>
            <div className='project__skills-container'>
                <Highlight title={"Spillutvikling"} text={"Har spillutviklings erfaring i utviklerverktøyet Unreal Engine."} />
                <Highlight title={"Kunstig intelligens"} text={"Har erfaring med kunstig intelligens, maskinlæring og \
                dyplæring, e.g. oppsett av kunstige nevrale nettverk og K-nærmeste naboer. \
                Med rammeverkene scikit-learn, pytorch og tensorflow."} />
                <Highlight title={"Bildeanalyse"} text={"Har erfaring i bildeanlyse med Matlab Computer Vision."} />

            </div>
            <div className='project__skills-container'>
                <Highlight title={"Datavisualisering"} text={"Har erfaring med datavisualisering i biblioteket matplotlib."} />
                <Highlight title={"RESTful API"} text={"Har erfaring med RESTful API integrasjon, distribusjon og operasjon av \
                skybaserte tjenester i GoLang."} />
                <Highlight title={"Database"} text={"Har erfaring med relasjonelle og dokumentbaserte databaser i SQL og noSQL for \
                kommunikasjon mellom applikasjon og database. \
                Har brukt databasesystemene mariaDB, Firebase og couchDB."} />
            </div>
            <div className='project__skills-container'>
                <Highlight title={"Web"} text={"Har noe erfaring med webutvikling i HTML/CSS, javascript og biblioteket React."} />
                <Highlight title={"Serverdrift og infrastruktur"} text={"Har erfaring med serverdrift og infrastruktur gjennom apache og Docker.\
                 Har satt opp dynamisk docker swarm-miljø med redundante webservere, lastbalansering og \"canary release\" \
                 oppsett med HAproxy for kontinuerlig produksjonssetting."} />
                <Highlight title={"Versjonkontroll"} text={"Har mye erfaring med versjonskontrollsystemet Git."} />
            </div>
        </div>
    )
}

export default Skills

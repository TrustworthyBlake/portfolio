import React from 'react';
import { Repo } from '../../components';
import './projects.css';

const Projects = () => {
  return (
    <div className='project__projects section__padding' id="projects">
      <div className='project__projects-heading'>
        <h1 className='gradient__text'>Portefølje</h1>
      </div>
      <div className='project__projects-container'>
        <div className='project__projects-container_group'>
          <Repo title="Bacheloroppgave"
            text="Gamification of Curricula for Primary, Lower Secondary, and Upper Secondary Schools. Skrevet i kotlin"
            repoUrl="https://github.com/TrustworthyBlake/ktxGamePrototype01" />
          <Repo title="Rutetabell program"
            text="Program som holder oversikt buss, bane ruter og stoppesteder med rutetabeller. Skrevet i C++."
            repoUrl="https://git.gvk.idi.ntnu.no/andrbl/gruppe44-prog1003-2022" />
          <Repo title="Denne nettsiden"
            text="Skrevet i HTML/CSS, javascript med bruk av rammeverket React."
            repoUrl="https://github.com/TrustworthyBlake/portfolio" />
          <Repo title="Banan alder identifiserer"
            text="Program som analyser bilder av bananer og skiller mellom gode og dårlige bananer med hjelp av 
           semantisk segmentering i et konvolusjonelt nevralt nettverk. Kodet i Matlab."
            repoUrl="https://github.com/miloszaw/objIdentify" />
          <Repo title="3D pacman"
            text="3D Pac-man klone laget med openGL i C++."
            repoUrl="https://git.gvk.idi.ntnu.no/andrbl/imt2531_assignment2" />
          <Repo title="Løsningsforslag til oppgaver i C"
            text="Løsningsforslag til oppgaver fra oppgave-kompendiet og obliger gitt av Forde Haug ved NTNU, Gjøvik. 
          Kodet i C."
            repoUrl="https://github.com/TrustworthyBlake/grprogOppgaver" />
          <Repo title={"FPS multiplayer i Unreal Engine"}
            text={"FPS med multiplayer. Laget i Unreal Engine, C++."}
            repoUrl={"https://github.com/voaarnes/kcnGame"} />
          <Repo title="48h Game Jam"
            text="Game jam på 48 timer for å lære Unreal Engine."
            repoUrl="https://github.com/TrustworthyBlake/SoloGameJamAILv2" />
        </div>
      </div>
    </div>
  )
}

export default Projects
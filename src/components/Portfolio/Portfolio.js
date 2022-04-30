import React from 'react';
import gpupPic from './resources/gpup-graph.png';
import chessPic from './resources/chess-pic.png';
import javaPic from './resources/java.png';
import tomcatPic from './resources/tomcat-pic.png';
import okHttpPic from './resources/okhttp-pic.png';
import gsonPic from './resources/gson-pic.png';
import cppPic from './resources/cpp-pic.png';
import visualStudioPic from './resources/visual-studio-pic.jpg';
import githubPic from './resources/github-pic.png';
import oopPic from './resources/oop-pic.jpg';

/* Constants*/

const gpupLink = 'https://github.com/ShaiBallali/Gpup';
const boardGamesLink = 'https://github.com/ShaiBallali/BoardGames';

/********************************/

function Portfolio() {
  return (
    <container>
      <div className="gpup-container">
        <Slides />
      </div>
    </container>
  );
}

function GpupHeader() {
  return <h1 className="slide-header">G.P.U.P</h1>;
}

function BoardGamesHeader() {
  return <h1 className="slide-header"> Board Games</h1>;
}

function GpupSkills() {
  return (
    <div className="slide-skills">
      <Skill src={javaPic} />
      <Skill src={okHttpPic} />
      <Skill src={tomcatPic} />
      <Skill src={gsonPic} />
    </div>
  );
}

function BoardGamesSkills() {
  return (
    <div className="slide-skills">
      <Skill src={cppPic} />
      <Skill src={visualStudioPic} />
      <Skill src={oopPic} />
    </div>
  );
}

function GpupInfo() {
  return (
    <div className="slide-info">
      G.P.U.P – Generic Platform for Utilizing Processes. GPUP is a
      multi-threaded platform that enables to model set of dependencies between
      components and handle them efficiently, getting various insights out of
      the ‘graph’ components: routes, circles, transitive dependencies etc.
    </div>
  );
}

function BoardGamesInfo() {
  return (
    <div className="slide-info">
      Chess, Checkers and Amazons implemented in C++, using object oriented
      features.
    </div>
  );
}

function Skill(props) {
  return (
    <div>
      <img className="pic" src={props.src} alt="" />
    </div>
  );
}

function GpupPic() {
  return (
    <div className="slide-pic">
      <a href={gpupLink} target="_blank" rel="noreferrer" className="icon">
        <img className="gpup-graph" src={gpupPic} alt="sss" />
      </a>
    </div>
  );
}
function ChessPic() {
  return (
    <div className="slide-pic">
      <a
        href={boardGamesLink}
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <img className="chess-board" src={chessPic} alt="sss" />
      </a>
    </div>
  );
}

function Slide(props) {
  return (
    <div className="slide">
      <h1 className="slide-header">
        <props.header />
      </h1>
      <p className="slide-paragraph">
        <props.info />
      </p>
      <skills className="slide-skills">
        <props.skills />
      </skills>
      <github-icon className="slide-icon">
        <container className="github-and-pic">
          <h3 className="github-header">Github:</h3>
          <props.github />
        </container>
      </github-icon>
    </div>
  );
}

function Slides() {
  return (
    <div>
      <Slide
        header={GpupHeader}
        info={GpupInfo}
        skills={GpupSkills}
        github={GpupPic}
      />
      <Slide
        header={BoardGamesHeader}
        info={BoardGamesInfo}
        skills={BoardGamesSkills}
        github={ChessPic}
      />
    </div>
  );
}

export default Portfolio;

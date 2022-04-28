import React from 'react';
import gpupPic from './resources/gpup-graph.png';
import chessPic from './resources/chess-pic.png';
import javaPic from './resources/java.png';
import tomcatPic from './resources/tomcat-pic.png';
import okHttpPic from './resources/okhttp-pic.png';
import gsonPic from './resources/gson-pic.png';
import cppPic from './resources/cpp-pic.png';
import visualStudioPic from './resources/visual-studio-pic.png';
import { FaJava } from 'react-icons/fa';

const logoSize = '50px';
const javaButtonColor = '#0077b5';

function Portfolio() {
  return (
    <container>
      <div className="gpup-container">
        <GpupPic />
        <GpupSkills />
        <Gpup />
      </div>
      <div className="board-games-container">
        <ChessPic />
        <BoardGamesSkils />
        <BoardGames />
      </div>
    </container>
  );
}

function GpupSkills() {
  return (
    <container className="gpup-skills-container">
      <img className="java-pic" src={javaPic} alt="sss" />
      <img className="tomcat-pic" src={tomcatPic} alt="sss" />
      <img className="okhttp-pic" src={okHttpPic} alt="sss" />
      <img className="gson-pic" src={gsonPic} alt="sss" />
    </container>
  );
}

function GpupPic() {
  return (
    <div>
      <a
        href="https://github.com/ShaiBallali/Gpup"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <img className="gpup-graph" src={gpupPic} alt="sss" />
      </a>
    </div>
  );
}
function ChessPic() {
  return (
    <div>
      <a
        href="https://github.com/ShaiBallali/BoardGames"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <img className="chess-board" src={chessPic} alt="sss" />
      </a>
    </div>
  );
}

function BoardGamesSkils() {
  return (
    <container className="board-games-skills-container">
      <img className="cpp-pic" src={cppPic} alt="sss" />
      <img className="visual-studio-pic" src={visualStudioPic} alt="sss" />
    </container>
  );
}

function Gpup() {
  return (
    <div className="gpup">
      <h1 className="header">G.P.U.P</h1>
      <p className="gpup-paragraph">
        G.P.U.P – Generic Platform for Utilizing Processes. GPUP is a
        multi-threaded platform that enables to model set of dependencies
        between components and handle them efficiently, getting various insights
        out of the ‘graph’ components: routes, circles, transitive dependencies
        etc.
      </p>
    </div>
  );
}

function BoardGames() {
  return (
    <div className="board-games">
      <h1 className="header">Board Games</h1>
      <p className="board-games-paragraph">
        Chess, Checkers and Amazons implemented in C++, using object oriented
        features.
      </p>
    </div>
  );
}

export default Portfolio;

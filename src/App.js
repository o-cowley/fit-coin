import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/component.css'

import React, { useState } from "react";

import ControlBar from "./Components/ControlBar";
import NavBar from './Components/NavBar';
import UserDataBar from './Components/UserDataBar';
import Bullseye from './Components/Bullseye';

import { SwipeButton, GlowButton, CircledButton } from './Components/SpecialButtons';

// import { set } from 'mongoose';
// import VideoFeed from "./Components/VideoFeed";
// import LoginPage from './Components/LoginPage';



function App() {

  const [login, setLogin] = useState(true);

  const [playerScore, setCurrentScore] = useState(0);
  const [gameStyle, setGameStyle] = useState(true);
  const [ready, setReady] = useState(false)

  function scorePoints(p) {
    setCurrentScore(prevState => prevState + p);
  }

  function resetGame() {
    setCurrentScore(0);
    setReady(false)
  }

  function toClick() {

    console.log("CLICK");
    setLogin(!login);
  }

  const readyToPlay = () => {
    setReady(prevState => {return !prevState});
  }

  function changeGameShape() {
    setGameStyle(prevState => !prevState);
  }

  const scores = [
    {
      'name': "GAME1",
      'score': 50
    },
    {
      'name': "GAME2",
      'score': 100
    }
  ]
  return (
    <div className='grid-container'>
      <NavBar className='header' logInOut={toClick} showLogin={login} />
      
      <ControlBar className='control-panel' changeGame={changeGameShape} resetScore={resetGame} setScore={scorePoints}/>
    
      <div className={ready ? 'game-panel' : "game-panel add-blue"}>

        {ready ? 
          <Bullseye addScore={scorePoints} score={playerScore} shapeType={gameStyle ? 'circle' : 'square'}/> :
          <div className='display-grid'>
            <GlowButton buttonPress={readyToPlay} text='Press Me to Play'/>
          </div>}      

      </div>

      
    
      <UserDataBar className='score-bar' name="Oliver" score={scores} currentScore={playerScore}/>

      <div className='footer'>A footer eh? This little game was made (and remade and remade again) by Oliver Cowley</div>

      {/* <LoginPage /> */}
    </div>
  )

}



export default App;

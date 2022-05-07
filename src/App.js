import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/component.css'
import VideoFeed from "./Components/VideoFeed";
import React from "react";
import ControlBar from "./Components/ControlBar";
import ButtonBar from "./Components/ButtonBar";
import NavBar from './Components/NavBar';
import RightBar from './Components/RightBar';



function App() {

  function toClick() {
    console.log("CLICK");
  }

  const scores = [
    {
      'name': "GAME1",
      'score': 50
    },
    {
      'name': "GAME2",
      'score': 100
    },
    {
      'name': "FUNNY GAME",
      'score': 100
    }
  ]
  return (
    <div>
      <NavBar logInOut={toClick} showLogin={true}/>
      <div className="main-page">
        <ControlBar />
        <div className="test-middle"><VideoFeed /></div>
        
        <RightBar name="Oliver" score={scores} />
      </div>
    </div>
  )

}



export default App;

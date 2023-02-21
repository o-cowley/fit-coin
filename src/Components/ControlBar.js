import "./Component_Styling/ControlBar.css"

import { Button, Card } from 'react-bootstrap'
import logo from "../Images/logo.svg"
import ButtonBar from './ButtonBar'
import { CircledButton } from "./SpecialButtons"


function ControlBar({changeGame, resetScore, setScore}) {
  return (
    <div className='card-container'>
      
      <Card className="card">
        <Card.Header className="header">Play the game</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={logo} />
          <Card.Title>The Bullseye Game</Card.Title>
          <Card.Text>
            Click the Bullseye to score points!
          </Card.Text>
          
          <CircledButton buttonPress={changeGame} text="Change the Bullseye"/>
          
        </Card.Body>
        {/* <Card.Footer>Tis is a footer</Card.Footer> */}
      </Card>
      
      <div className='end'>
        <ButtonBar resetScore={resetScore} setScore={setScore}/>
      </div>
      

    </div>
  )
}

export default ControlBar
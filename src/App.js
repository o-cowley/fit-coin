import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/component.css'
import VideoFeed from "./Components/VideoFeed";
import React, { useState } from "react";
import ControlBar from "./Components/ControlBar";
import NavBar from './Components/NavBar';
import RightBar from './Components/RightBar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row/'
import Col from 'react-bootstrap/Col/'
import LoginPage from './Components/LoginPage';



function App() {

  const [token, setToken] = useState(true);

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
      <NavBar logInOut={toClick} showLogin={true} />
      <div className="main-page">
        <Container>
          <Row>
            <Col>
              <ControlBar />
            </Col>
            <Col>
              <div className="test-middle"><VideoFeed /></div>
            </Col>
            <Col>
              <RightBar name="Oliver" score={scores} />
            </Col>
          </Row>
        </Container>
      </div>
      {/* <LoginPage /> */}
    </div>
  )

}



export default App;

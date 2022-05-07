import React from 'react'
import { Button, Card } from 'react-bootstrap'
import logo from "../Images/logo.svg"
import ButtonBar from './ButtonBar'

function ControlBar() {
  return (
    <div className='card'>
      <Card style={{width:"100%"}}>
        <Card.Header>Tis is a header</Card.Header>
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Img variant="top" src={logo} />
          <Card.Title>The Demo Card</Card.Title>
          <Card.Text>
            This is some text for the Card, it is where I could put a description
          </Card.Text>
          <Button variant="secondary">This is where you would select</Button>
        </Card.Body>
        <Card.Footer>Tis is a footer</Card.Footer>
      </Card>
      <ButtonBar />

    </div>
  )
}

export default ControlBar
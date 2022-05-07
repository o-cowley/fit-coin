import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import ControlButton from './ControlButton'

function ButtonBar() {
  return (
    <div style={{
        width: "100%"
      }}>
        <Stack gap={2}>
            <Button variant="outline-primary">Outline-Primary</Button>{' '}
            <ControlButton text="LOOK AT ME" variant="outline-danger"/>
            <ControlButton text="ANOTHER" variant="outline-secondary"/>
            <ControlButton text="Yay"/>
        </Stack>
    </div>
  )
}

export default ButtonBar
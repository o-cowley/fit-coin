import { Button } from 'react-bootstrap'
import React from 'react'
import PropTypes from 'prop-types'

function ControlButton({ text, variant }) {
  return (
    <Button
        variant= {variant}
        className='btn'>
    {text}
    </Button>
  )
}

Button.defaultProps = {
    variant: "danger",
}

Button.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
}



export default ControlButton
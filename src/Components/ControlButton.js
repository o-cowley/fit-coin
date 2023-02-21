import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

function ControlButton({ text, variant, buttonPress }) {
  return (
    <Button
        variant= {variant}
        className='btn'
        onClick={buttonPress}>
    {text}
    </Button>
  )
}

Button.defaultProps = {
    variant: "outline-primary",
}

Button.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    buttonPress: PropTypes.func
}



export default ControlButton
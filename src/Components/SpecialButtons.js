import "./Component_Styling/Button.css"

const SwipeButton = ({ buttonPress, text }) => {
  return (
    <div className="button-container">
        <div className="swipe-button" onClick={buttonPress}>
            {text}
        </div>
    </div>
    
  )
}

const GlowButton = ({ buttonPress, text }) => {
  return (
    <div className="button-container make-purple">
        <div className="glow-button" onClick={buttonPress}>
          {text}
        </div>
    </div>
    
  )
}


const CircledButton = ({ buttonPress, text }) => {
  return (
    
        <div className="circled-button" onClick={buttonPress}>
          <span className="circled-button-top"></span>
          <span className="circled-button-left"></span>
          <span className="circled-button-bot"></span>
          <span className="circled-button-right"></span>
          {text}
        </div>
    
    
  )
}

export {SwipeButton, GlowButton, CircledButton}

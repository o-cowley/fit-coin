import { Stack } from 'react-bootstrap'
// import ControlButton from './ControlButton'
import { SwipeButton } from './SpecialButtons';

function ButtonBar({resetScore, setScore}) {
  const jumpScore = () => {
    setScore(100);
  }

  return (
    <div style={{
        width: "100%"
      }}>
        <Stack gap={3 }>
            <SwipeButton text="Give me 100" buttonPress={jumpScore}/>
            <SwipeButton text="Reset Game" buttonPress={resetScore}/>
        </Stack>
    </div>
  )
}

export default ButtonBar
import React, {useState} from 'react'
import UseEffectCounter2 from './UseEffectCount2'

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => {
            setDisplay(!display)
        }}>
            Toggle Display
        </button>
        {display && <UseEffectCounter2/>}
    </div>
  )
}

export default UseEffectCounterContainer
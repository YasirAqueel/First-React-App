import React, {useState} from 'react'
import UseeffectHookMouse from './UseeffectHookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
       {display && <UseeffectHookMouse />}
    </div>
  )
}

export default MouseContainer

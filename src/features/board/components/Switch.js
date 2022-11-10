import React, { useState } from 'react'
import SwitchOn from '../shapes/SwitchOn'
import SwitchOff from '../shapes/SwitchOff';

export default function Switch() {

  const [isOn, setIsOn] = useState(false);

  const handleClick = () => setIsOn(!isOn);

  return (
    <div onClick={handleClick}>
      {isOn ? <SwitchOn/> : <SwitchOff/>}
    </div>
  )
}

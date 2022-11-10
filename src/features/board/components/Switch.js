import React, { useState } from 'react'
import SwitchOn from '../shapes/SwitchOn'
import SwitchOff from '../shapes/SwitchOff';
import styles from './components.module.css';

export default function Switch() {

  const [isOn, setIsOn] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseUp = () => {
    setIsMouseDown(false);
    if (!isMoving) {
      setIsOn(!isOn);
    }

    setIsMoving(false);
  }

  const handleMouseMove = () => {
    if(isMouseDown) {
      setIsMoving(true);
    }
  }

  return (

        <div onMouseUp={handleMouseUp}
             onMouseDown={() => setIsMouseDown(true)}
             onMouseMove={handleMouseMove}
             className={styles.component}>
          {isOn ? <SwitchOn/> : <SwitchOff/>}
        </div>

  )
}

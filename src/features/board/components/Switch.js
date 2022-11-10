import React  from 'react'
import SwitchOn from '../shapes/SwitchOn'
import SwitchOff from '../shapes/SwitchOff';

export default function Switch({ isOn = false }) {
  return (
      isOn ? <SwitchOn/> : <SwitchOff/>
  )
}

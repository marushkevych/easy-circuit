import React  from 'react'

export default function Star({movableRef}) {
  return (
      <svg ref={movableRef} height="205" width="200">
        <polygon points="100,10 40,198 190,78 10,78 160,198" style={{fill: 'lime', stroke: 'purple', strokeWidth: 5, fillRule: 'nonzero'}}/>
        Sorry, your browser does not support inline SVG.
      </svg>
  )
}

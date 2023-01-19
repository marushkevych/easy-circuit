import React  from 'react'

export default function Circle({movableRef}) {
  return (
      <svg ref={movableRef} height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
        Sorry, your browser does not support inline SVG.
      </svg>
  )
}

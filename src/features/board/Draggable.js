import React, { useEffect } from 'react'
import useDragging from './useDragging'

export default function Draggable({x, y}) {
  const [ref, position, isDragging] = useDragging({x, y})

  const style = {
    position: "absolute",
    width: 50,
    height: 100,
    background: isDragging ? "blue" : "gray",
    left: x,
    top: y,
  }

  return (
      <div ref={ref} style={style}>Foo</div>
  );
}

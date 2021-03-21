import React  from 'react'
import useDragging from './useDragging'

export default function Draggable() {
  const [ref, x, y, isDragging] = useDragging()

  const style = {
    position: "absolute",
    width: 50,
    height: 50,
    background: isDragging ? "blue" : "gray",
    left: x,
    top: y,
  }

  return (
      <div ref={ref} style={style}>Foo</div>
  );
}

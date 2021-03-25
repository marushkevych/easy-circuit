import React, { useRef } from 'react'
import useDragging from './useDragging'
import styles from './Board.module.css'

export default function Draggable({x, y, onMove}) {
  const ref = useRef(null);
  useDragging(ref, {x, y}, onMove)

  const style = {
    position: "absolute",
    width: 50,
    height: 100,
    /* opaque background is important for performance */
    background: "gray",
    /* avoid selecting text while dragging */
    userSelect: "none"
  }

  return (
    <div ref={ref} style={style}>Foo</div>
  );
}

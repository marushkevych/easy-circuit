import React, { useCallback } from 'react'
import { useMovable } from "react-move-hook";
import styles from './Board.module.css'

export default function Draggable({state, onMove}) {

  const handleChange = useCallback((moveData) => {
    onMove((state) => ({
      moving: moveData.moving,
      position: moveData.stoppedMoving
                ? {
            ...state.position,
            x: state.position.x + moveData.delta.x,
            y: state.position.y + moveData.delta.y
          }
                : state.position,
      delta: moveData.moving ? moveData.delta : undefined
    }));
  }, []);

  const ref = useMovable({ onChange: handleChange, bounds: "parent" });

  const style = {
    backgroundColor: state.moving ? "red" : "transparent",
    left: state.position.x,
    top: state.position.y,
    transform: state.delta
               ? `translate3d(${state.delta.x}px, ${state.delta.y}px, 0)`
               : undefined
  };

  return (
    <div ref={ref} style={style} className={styles.movable}>
      <svg height="205" width="200">
        <polygon points="100,10 40,198 190,78 10,78 160,198" style={{fill: 'lime', stroke: 'purple', strokeWidth: 5, fillRule: 'nonzero'}}/>
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}

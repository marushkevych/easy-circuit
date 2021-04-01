import React, { useCallback, useState, useEffect } from 'react'
import { useMovable } from "react-move-hook";
import styles from './Board.module.css'

import { useDispatch } from 'react-redux';
import { updateElementMoveData } from './boardSlice'

export default function Draggable({id, moveData}) {
  const dispatch = useDispatch();

  const [state, setState] = useState(moveData);

  useEffect(() => {
    if(!state.moving) {
      dispatch(updateElementMoveData({
        id,
        moveData: {
          moving: false,
          position: state.position,
        }
      }))
    }
  }, [state.moving])

  const handleChange = useCallback((data) => {
    setState((state) => {
      return {
        moving: data.moving,
        position: data.stoppedMoving ? {
          ...state.position,
          x: state.position.x + data.delta.x,
          y: state.position.y + data.delta.y
        } : state.position,
        delta: data.moving ? data.delta : undefined
      }
    });
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

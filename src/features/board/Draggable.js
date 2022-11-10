import React, { useCallback, useState, useEffect } from 'react'
import { useMovable } from "react-move-hook";
import styles from './Board.module.css'

import { useDispatch } from 'react-redux';
import { updateElementMoveData } from './boardSlice'

export default function Draggable({id, position, children}) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    position
  });

  useEffect(() => {
    if(!state.moving) {
      dispatch(updateElementMoveData({
        id,
        position: state.position,
      }))
    }
  }, [state.moving])

  const handleChange = useCallback(({moving, stoppedMoving, delta}) => {
    setState((state) => {
      return {
        moving: moving,
        position: stoppedMoving ? {
          ...state.position,
          x: state.position.x + delta.x,
          y: state.position.y + delta.y
        } : state.position,
        delta: moving ? delta : undefined
      }
    });
  }, []);

  const ref = useMovable({ onChange: handleChange, bounds: "parent" });

  const style = {
    // backgroundColor: state.moving ? "red" : "transparent",
    left: state.position.x,
    top: state.position.y,
    transform: state.delta
               ? `translate3d(${state.delta.x}px, ${state.delta.y}px, 0)`
               : undefined
  };

  return (
    <div ref={ref} style={style} className={styles.movable}>
      {children}
    </div>
  );
}

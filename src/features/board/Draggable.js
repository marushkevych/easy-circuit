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

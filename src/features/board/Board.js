import React, { useState } from 'react'
import styles from './Board.module.css'

import DraggableTwo from './DraggableTwo'

import Draggable from './Draggable'

export function Board() {

  const [position, setPosition] = useState({
    x: 100,
    y: 200,
  });

  const move = (x, y) => setPosition({x, y});

  return (
      <div className={styles.board}>
        {/*<DraggableComponent/>*/}
        <Draggable x={50} y={200}/>
        <DraggableTwo x={position.x} y={position.y} onMove={move}>
        </DraggableTwo>
      </div>
  );
}

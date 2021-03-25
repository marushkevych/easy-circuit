import React, { useState } from 'react'
import styles from './Board.module.css'

import Draggable from './Draggable'

export function Board() {

  const [position, setPosition] = useState({
    x: 100,
    y: 200,
  });

  const move = (x, y) => setPosition({x, y});

  return (
      <div id="board" className={styles.board}>
        <Draggable x={position.x} y={position.y} onMove={move}/>
      </div>
  );
}

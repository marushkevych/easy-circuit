import React, { useState } from 'react'
import styles from './Board.module.css'

import Draggable from './Draggable'

export function Board() {

  const [state, setState] = useState({
    moving: false,
    position: { x: 50, y: 100 },
    delta: undefined
  });

  return (
      <div id="board" className={styles.board}>
        <Draggable state={state} onMove={setState}/>
      </div>
  );
}

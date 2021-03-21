import React from 'react'
import styles from './Board.module.css'

import DraggableComponent from './DraggableComponent'
import Draggable from './Draggable'

export function Board() {
  return (
      <div className={styles.board}>
        <DraggableComponent/>
        <Draggable/>
      </div>
  );
}

import React from 'react';
import styles from './Board.module.css';

export default function Port() {

  const handleMouseDown = (event) => {
    console.log("port clicked")
  }
  const handleMouseMove = (event) => {
    console.log("port moise move")
    event.stopPropagation();
  }

  return (
      <div className={styles.port}
           onMouseDown={handleMouseDown}
           onMouseMove={handleMouseMove}
      />
  );
}

import React, {useEffect, useState} from 'react'
import styles from './Bpard.module.css';

export function Board() {
  return (
      <div className={styles.board}>
        <MouseRender/>
      </div>
  );
}

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0});

  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY});
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
}

function MouseRender() {
  const mouse = useMousePosition();

  return <span>Mouse X: {mouse.x} Mouse Y: {mouse.y}</span>
}

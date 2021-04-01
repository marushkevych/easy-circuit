import React  from 'react'
import { useSelector } from 'react-redux';
import { selectComponents } from './boardSlice'
import { values } from 'ramda';

import styles from './Board.module.css'

import Draggable from './Draggable'

export function Board() {
  const components = useSelector(selectComponents);
  return (
    <div id="board" className={styles.board}>
      {values(components).map(component => <Draggable key={component.id} {...component}/>)}
    </div>
  );
}

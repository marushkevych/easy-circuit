import React  from 'react'
import { useSelector } from 'react-redux';
import { selectComponents } from './boardSlice'
import { values } from 'ramda';
import Switch from './components/Switch';
import Star from './shapes/Star';
import Circle from './shapes/Circle';

import styles from './Board.module.css'

import Draggable from './Draggable'

const types = { Star, Circle, Switch };

export function Board() {
  const components = useSelector(selectComponents);
  return (
    <div id="board" className={styles.board}>
      {values(components).map(renderComponent)}
    </div>
  );
}

function renderComponent(component) {
  const {id, type, position} = component;
  const ComponentType = types[type];
  return <Draggable key={id} id={id} position={position}><ComponentType/></Draggable>
}

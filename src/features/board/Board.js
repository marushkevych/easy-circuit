import React  from 'react'
import { useSelector } from 'react-redux';
import { selectComponents } from './boardSlice'
import { values } from 'ramda';
import Switch from './svgComponents/Switch';
import Star from './svgComponents/Star';
import Circle from './svgComponents/Circle';

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
  const ComponentType = types[component.type];
  return <Draggable key={component.id} {...component}><ComponentType/></Draggable>
}

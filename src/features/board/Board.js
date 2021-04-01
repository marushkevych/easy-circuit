import React  from 'react'
import { useSelector } from 'react-redux';
import { selectComponents } from './boardSlice'
import { values } from 'ramda';

import styles from './Board.module.css'

import Draggable from './Draggable'

const Star = () => (
    <svg height="205" width="200">
      <polygon points="100,10 40,198 190,78 10,78 160,198" style={{fill: 'lime', stroke: 'purple', strokeWidth: 5, fillRule: 'nonzero'}}/>
      Sorry, your browser does not support inline SVG.
    </svg>
);

const Circle = () => (
    <svg height="100" width="100">
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
      Sorry, your browser does not support inline SVG.
    </svg>
);

const types = { Star, Circle };

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

import React from 'react';
import {layout} from '../data.js';
import SquareLayout from './SquareLayout.jsx';
import TextSquare from './TextSquare.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SquareLayout>
          <div></div>
          <div></div>
          <TextSquare text={layout.leftBottom.text} img={layout.leftBottom.img}></TextSquare>
          <div></div>
        </SquareLayout>
      </div>
    );
  }
}

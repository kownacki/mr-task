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
          <SquareLayout>
            <img className="fit" src={layout.rightTop.leftTop.img} />
            <img className="fit" src={layout.rightTop.rightTop.img}/>
            <img className="fit" src={layout.rightTop.leftBottom.img}/>
            <TextSquare small text={layout.rightTop.rightBottom.text} img={layout.rightTop.rightBottom.img}></TextSquare>
          </SquareLayout>
          <TextSquare text={layout.leftBottom.text} img={layout.leftBottom.img}></TextSquare>
          <div></div>
        </SquareLayout>
      </div>
    );
  }
}

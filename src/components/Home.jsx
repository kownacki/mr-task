import React from 'react';
import SquareLayout from './SquareLayout.jsx';
import {Link} from 'react-router-dom';
import {layout} from '../data.js';
import TextSquare from './TextSquare.jsx';

export default function Home(props) {
  return (
    <SquareLayout>
      <div>
        <Link to="/houses">Houses</Link>
      </div>
      <SquareLayout small>
        <img className="fit" src={layout.rightTop.leftTop.img} />
        <img className="fit" src={layout.rightTop.rightTop.img}/>
        <img className="fit" src={layout.rightTop.leftBottom.img}/>
        <TextSquare small text={layout.rightTop.rightBottom.text} img={layout.rightTop.rightBottom.img}></TextSquare>
      </SquareLayout>
      <TextSquare text={layout.leftBottom.text} img={layout.leftBottom.img}></TextSquare>
      <div></div>
    </SquareLayout>
  );
};

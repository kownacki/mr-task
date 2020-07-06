import React from 'react';
import SquareLayout from './SquareLayout.jsx';
import {layout} from '../data.js';
import TextSquare from './TextSquare.jsx';
import {connect} from 'react-redux';
import {navigateToHouses} from '../redux/actions.js';

function Home(props) {
  return (
    <SquareLayout>
      <div>
        <button onClick={props.navigateToHouses}>Zobacz więcej</button>
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
}

export default connect(
  (state) => ({reduxState: state}),
  {navigateToHouses},
)(Home);

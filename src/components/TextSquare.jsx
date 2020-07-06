import React from 'react';

export default function TextSquare(props) {
  return (
    <div className="text-square">
      <img src={props.img}/>
      <div className="text-square-overlay"></div>
      <div className="text-square-wrapper">
        <div className="text-square-content">
          {props.text}
        </div>
      </div>

    </div>
  );
}

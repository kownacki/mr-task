import React from 'react';

export default function SquareLayout(props) {
  return (
    <div className="square-layout">
      {props.children.map((child, index) => <div key={index}>{child}</div>)}
    </div>
  );
};

import React from 'react';

export default function SquareLayout(props) {
  return (
    <div className={'square-layout' + (props.small ? ' small' : '')}>
      {props.children.map((child, index) => <div key={index}>{child}</div>)}
    </div>
  );
};

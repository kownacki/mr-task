import React from 'react';
import SquareLayout from './SquareLayout.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SquareLayout>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </SquareLayout>
      </div>
    );
  }
}

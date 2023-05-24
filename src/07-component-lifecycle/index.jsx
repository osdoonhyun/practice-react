import React, { Component } from 'react';

import ErrorBoundary from './ErrorBoundary';
import Lifecycle from './Lifecycle';

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
class ComponentLifeCycle extends Component {
  state = {
    color: '#000000',
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <Lifecycle color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default ComponentLifeCycle;

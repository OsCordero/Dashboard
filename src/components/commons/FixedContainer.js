import React, { Component } from 'react';
import './styles.css';

export class FixedContainer extends Component {
  render(props) {
    return <div className='fixed-container'>{this.props.children}</div>;
  }
}

export default FixedContainer;

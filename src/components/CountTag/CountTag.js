import React, { Component } from 'react';
import './styles.css';

export class CountTag extends Component {
  render(props) {
    return (
      <div className='count-tag'>
        <div className='title'>{this.props.title}</div>
        <div className='number'>
          {this.props.number} &nbsp;<span className='number-remaining'>{this.props.remaining}</span>
        </div>
      </div>
    );
  }
}

export default CountTag;

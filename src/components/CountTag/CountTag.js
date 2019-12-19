import React, { Component } from 'react';
import './counttag.css';

export class CountTag extends Component {
  render(props) {
    const { title, remaining, number } = this.props;
    return (
      <div className='count-tag'>
        <div className='fix-text'>
          {title && <div className='title'>{title}</div>}

          <div className='number'>
            {number}
            <span className='number-remaining'>{remaining}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountTag;

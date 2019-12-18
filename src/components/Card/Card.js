import React, { Component } from 'react';
import './card.css';

export class Card extends Component {
  render(props) {
    const { children, title, headerButton } = this.props;

    return (
      <div className='card'>
        <div className='card-header'>
          <div className='header-title'>{title}</div>
          <div className='header-button'>{headerButton}</div>
        </div>
        <div className='divider'></div>
        <div className='card-body'>{children}</div>
      </div>
    );
  }
}

export default Card;

import React from 'react';
import './card.css';

function Card(props) {
  const { children, title, headerButton } = props;

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='header-title'>
          <h3>{title}</h3>
        </div>
        <div className='header-button'>{headerButton}</div>
      </div>
      <div className='divider'></div>
      <div className='card-body'>{children}</div>
    </div>
  );
}

export default Card;

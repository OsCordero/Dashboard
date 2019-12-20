import React from 'react';
import './counttag.css';

function CountTag(props) {
  const { title, remaining, number } = props;
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

export default CountTag;

import React from 'react';
import './styles.css';

function FixedContainer(props) {
  return <div className='fixed-container'>{props.children}</div>;
}

export default FixedContainer;

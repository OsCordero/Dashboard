import React from 'react';
import './team.css';

function Team(props) {
  const { name, image } = props.data;
  return (
    <div className='team'>
      <img src={image} className='team-profile' alt='' />
      <div className='team-name'>{name}</div>
    </div>
  );
}

export default Team;

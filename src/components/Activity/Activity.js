import React from 'react';
import './activity.css';
function Activity(props) {
  const { comment, timeAgo, image } = props.data;
  return (
    <div className='activity'>
      <img className='activity-image' src={image} alt='Profile ' />

      <div className='activity-content'>
        <div className='activity-content-title'>
          <p>{comment}</p>
        </div>
        <div className='activity-content-time-ago'>{timeAgo}</div>
      </div>
    </div>
  );
}

export default Activity;

import React from 'react';
import './activity.css';
function Activity(props) {
  const { comment, timeAgo } = props.data;
  return (
    <div className='activity'>
      <img
        className='activity-image'
        src='https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        alt='Profile '
      />

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

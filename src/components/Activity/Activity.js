import React from 'react';
import './activity.css';
function Activity() {
  return (
    <div className='activity'>
      <img
        className='activity-image'
        src='https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg'
        alt='Profile Image'
      />

      <div className='activity-content'>
        <div className='activity-content-title'>
          Qu Linin high force grid-day mission, the dessign of New Projects iteration June{' '}
        </div>
        <div className='activity-content-time-ago'>2 days ago</div>
      </div>
    </div>
  );
}

export default Activity;

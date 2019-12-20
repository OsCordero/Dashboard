import React, { Component } from 'react';
import './projectresume.css';
function ProjectResume(props) {
  const { name, description, image, team, lastUpdate } = props.data;
  return (
    <div className='project-resume'>
      <div className='project-header'>
        <img className='project-photo' src={image} alt='' />
        <div className='project-name'> {name}</div>
      </div>
      <div className='project-body'>
        <p>{description}</p>
      </div>
      <div className='project-footer'>
        <div className='project-team-name'>{team}</div>
        <div className='project-last-update'> {lastUpdate}</div>
      </div>
    </div>
  );
}

export default ProjectResume;

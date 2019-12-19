import React, { Component } from 'react';
import './projectresume.css';
export class ProjectResume extends Component {
  render(props) {
    const { name, description, team, lastUpdate } = this.props.data;
    return (
      <div className='project-resume'>
        <div className='project-header'>
          <img
            className='project-photo'
            src='https://i1.wp.com/blog.enriqueoriol.com/wp-content/uploads/2018/01/AngularLogo.jpg?fit=1200%2C675'
            alt=''
          />{' '}
          <div className='project-name'> {name}</div>
        </div>
        <div className='project-body'>{description}</div>
        <div className='project-footer'>
          <div className='project-team-name'>{team}</div>
          <div className='project-last-update'> {lastUpdate}</div>
        </div>
      </div>
    );
  }
}

export default ProjectResume;

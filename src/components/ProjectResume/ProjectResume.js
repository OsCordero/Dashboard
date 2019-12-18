import React, { Component } from 'react';
import './projectresume.css';
export class ProjectResume extends Component {
  render(props) {
    return (
      <div className='project-resume'>
        <div className='project-header'>
          <img
            className='project-photo'
            src='https://i1.wp.com/blog.enriqueoriol.com/wp-content/uploads/2018/01/AngularLogo.jpg?fit=1200%2C675'
            alt=''
          />{' '}
          <div className='project-name'> {this.props.data.name}</div>
        </div>
        <div className='project-body'>
          It's an inner thing that they can't reach and can't reach
        </div>
        <div className='project-footer'>
          <div className='project-team-name'>Science moving bricks</div>
          <div className='project-last-update'> 2 days ago</div>
        </div>
      </div>
    );
  }
}

export default ProjectResume;

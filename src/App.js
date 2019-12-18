import React from 'react';
import NavBar from './components/NavBar/NavBar';
import InitBar from './components/InitBar/InitBar';
import FixedContainer from './components/commons/FixedContainer';
import Card from './components/Card/Card';
import ProjectResume from './components/ProjectResume/ProjectResume';
import Activity from './components/Activity/Activity';
const data = require('./data.json');
const projects = data.projects;

function App(props) {
  return (
    <div className='app'>
      <NavBar />
      <InitBar />
      <FixedContainer>
        <div className='content'>
          <div className='primary-content'>
            <Card title='Ongoing project' headerButton='All items'>
              <div className='projects-section'>
                {projects.map(project => (
                  <ProjectResume data={project} />
                ))}
              </div>
            </Card>
            <Card title='dynamic'>
              <div className='padding-content'>
                <Activity />
              </div>
            </Card>
          </div>
          <div className='secondary-content'>
            <Card title='XX index'>
              <div className='warever'>warever</div>
            </Card>
          </div>
        </div>
      </FixedContainer>
    </div>
  );
}

export default App;

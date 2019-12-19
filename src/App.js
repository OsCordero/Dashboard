import React from 'react';
import NavBar from './components/NavBar/NavBar';
import InitBar from './components/InitBar/InitBar';
import FixedContainer from './components/commons/FixedContainer';
import Card from './components/Card/Card';
import ProjectResume from './components/ProjectResume/ProjectResume';
import Activity from './components/Activity/Activity';
import Chart from './components/Chart/Chart';
import CountTag from './components/CountTag/CountTag';
import Team from './components/Team/Team';
const data = require('./data.json');
const { projects, activities } = data;

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
                {activities.map(activity => (
                  <Activity data={activity} />
                ))}
              </div>
            </Card>
          </div>
          <div className='secondary-content'>
            <Card title='XX index'>
              <div className='medium-padding-content'>
                <Chart />
                <div className='count-tags'>
                  <CountTag title='personal' number='34' />
                  <CountTag title='teasasm' number='22' />
                  <CountTag title='department' number='23' />
                </div>
              </div>
            </Card>
            <Card title='team'>
              <div className='padding-content'>
                <div className='teams'>
                  <Team />

                  <Team />
                  <Team />
                  <Team />
                  <Team />
                  <Team />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </FixedContainer>
    </div>
  );
}

export default App;

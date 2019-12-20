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
const { projects, activities, teams } = data;

function App(props) {
  return (
    <div className='app'>
      <NavBar />
      <InitBar
        greeting='Good Morning Oscar!'
        subGreeting=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos asu abera
                  doloremque, Lorem ipsum dolor sit amet'
      />
      <FixedContainer>
        <div className='content'>
          <div className='primary-content'>
            <Card title='Ongoing project' headerButton='All items'>
              <div className='projects-section'>
                {projects.map((project, index) => (
                  <ProjectResume data={project} key={project.id} />
                ))}
              </div>
            </Card>
            <Card title='dynamic'>
              <div className='padding-content'>
                {activities.map(activity => (
                  <Activity data={activity} key={activity.id} />
                ))}
              </div>
            </Card>
          </div>
          <div className='secondary-content'>
            <Card title='XX index'>
              <div className='medium-padding-content'>
                <Chart />
                <div className='count-tags'>
                  <CountTag number='34' />
                  <CountTag number='22' />
                  <CountTag number='23' />
                </div>
              </div>
            </Card>
            <Card title='team'>
              <div className='padding-content'>
                <div className='teams'>
                  {teams.map(team => (
                    <Team data={team} key={team.id} />
                  ))}
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

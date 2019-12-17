import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Container>
        <LeftSide>
          <ProjectResume />
          <Activities />
        </LeftSide>
        <RightSide />
      </Container>
    </div>
  );
}

export default App;

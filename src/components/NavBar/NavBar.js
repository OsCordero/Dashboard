import React from 'react';
import FixedContainer from '../commons/FixedContainer';
import './navbar.css';

function NavBar(props) {
  return (
    <div className='nav-bar'>
      <FixedContainer>Dashboard</FixedContainer>
    </div>
  );
}

export default NavBar;

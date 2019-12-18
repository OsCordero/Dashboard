import React, { Component } from 'react';
import FixedContainer from '../commons/FixedContainer';
import './navbar.css';
export class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <FixedContainer>Dashboard</FixedContainer>
      </div>
    );
  }
}

export default NavBar;

import React, { Component } from 'react';
import FixedContainer from '../commons/FixedContainer';
import CountTag from '../CountTag/CountTag';
import './initbar.css';
export class InitBar extends Component {
  render() {
    return (
      <div className='init-bar'>
        <FixedContainer>
          <div className='dir-bar'>
            Home / Dashboard / &nbsp;<span className='active'> Workspace </span>
          </div>
          <div className='resume-bar'>
            <div className='resume-bar-welcome'>
              <img
                className='profile'
                src='https://images.unsplash.com/photo-1576441335949-c4f4a2baf347?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
                alt=''
              />
              <div className='resume-bar-greeting'>
                <div className='resume-bar-main-greeting'>Good Morning Oscar!</div>
                <div className='resume-bar-sub-greeting'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos asu abera
                  doloremque, Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className='resume-bar-count'>
              <CountTag title='Number of items' number='56' />
              <CountTag title='Team ranking' number='8' remaining='&nbsp; / 24' />
              <CountTag title='Project visit' number='2,223' />
            </div>
          </div>
        </FixedContainer>
      </div>
    );
  }
}

export default InitBar;

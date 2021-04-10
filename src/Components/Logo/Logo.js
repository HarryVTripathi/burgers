import React from 'react';
import Classes from './Logo.module.css'
import logo from '../../Assets/Images/burger-logo.png';

const Logo = (props) => (
  <div className={Classes.Logo} style={{height: props.height}}>
    <img alt="burger" src={logo} />
  </div>
);

export default Logo;

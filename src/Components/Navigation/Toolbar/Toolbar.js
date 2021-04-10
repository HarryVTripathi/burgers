import React from 'react';
import Classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navingation-Items/Navigation-Items';
import DrawerToggle from '../Side-Drawer/Drawer-Toggle/Drawer-Toggle';

const Toolbar = (props) => (
  <header className={Classes.Toolbar}>
    <DrawerToggle clicked={props.DrawerToggleClicked}></DrawerToggle>
    <Logo height="80%"/>
    <nav className={Classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
)

export default Toolbar;

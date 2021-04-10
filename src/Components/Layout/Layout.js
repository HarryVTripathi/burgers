import React, { Component } from 'react';
import Aux from '../../HOC/Auxillary';
import Classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Side-Drawer/Side-Drawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler() {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler() {
    this.setState((prevState) =>  {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  render() {
    return (
    <Aux>
      <Toolbar DrawerToggleClicked={this.sideDrawerToggleHandler.bind(this)}></Toolbar>
      <SideDrawer
        open={this.state.showSideDrawer}
        closed={this.sideDrawerClosedHandler.bind(this)}
      ></SideDrawer>
      <main className={Classes.Content}>
        {this.props.children}
      </main>
    </Aux>);
  }
}

export default Layout;

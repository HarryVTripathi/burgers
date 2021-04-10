import React from 'react';
import Classes from './NavigationItems.module.css';
import NavigationItem from './Navigatioin-Item/Navigation-Item';

const NavigationItems = (props) => (
  <ul className={Classes.NavigationItems}>
    <NavigationItem link="" > Burgur Builder </NavigationItem>
    <NavigationItem link="" > Checkout </NavigationItem>
  </ul>
);

export default NavigationItems;

import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/Burgerbuilder';

// Layout components and navigation related components

// Containers will be stateful

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder> Some Random shit </BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;

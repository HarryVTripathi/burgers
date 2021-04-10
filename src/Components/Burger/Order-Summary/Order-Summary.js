import React, { Component } from 'react';
import Aux from '../../../HOC/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[OrderSummary] did update');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(ingr => (
      <li key={ingr}> 
        <span style={{textTransform: 'capitalize'}}> 
          {ingr}: {this.props.ingredients[ingr]} 
        </span>
      </li>));

    return (
      <Aux>
        <h3> Your Order </h3>
  
        <ul>
          {ingredientSummary}
        </ul>
        <p> Continue to checkout? </p>
        <p> <strong> Total Price: {this.props.price} </strong> </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}> CANCEL </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}> CONTINUE </Button>
      </Aux>
    );
  }
}

export default OrderSummary;

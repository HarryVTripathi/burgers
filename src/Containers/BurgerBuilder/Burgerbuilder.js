import React, { Component } from 'react';
import Aux from '../../HOC/Auxillary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/Build-Controls/Build-Controls';
import Modal from '../../Components/UI/Modals/Modal';
import OrderSummary from '../../Components/Burger/Order-Summary/Order-Summary';

const INGREDIENT_PRICES = Object.freeze({
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
});

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
    console.log('Added ingredient successfully');
    this.updatePurchaseStatus(updatedIngredients);
  }

  purchaseCancelHandler() {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler() {
    alert('Continue');
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;

    const updateCount = oldCount - 1;

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
    console.log('Removed ingredient successfully');
    this.updatePurchaseStatus(updatedIngredients);
  }

  updatePurchaseStatus = (ingredients) => {
    const sum = Object.values(ingredients)
      .reduce((count1, count2) => count1 + count2);

    this.setState({ purchasable: (sum > 0) });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let ingrKey in disabledInfo) {
      disabledInfo[ingrKey] = disabledInfo[ingrKey] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler.bind(this)}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler.bind(this)}
            purchaseContinued={this.purchaseContinueHandler.bind(this)}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          purchasable={this.state.purchasable}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;

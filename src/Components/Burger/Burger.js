import React from 'react';
import BurgerIngrediants from './Burger-Ingrediants/Burger-Ingrediants';
import classes from './Burger.module.css';

const Burger = (props) => {
  const { ingredients } = props;
  const transormedIngredients = Object.keys(ingredients)
    .map(ingrKey => {
      return [...Array(ingredients[ingrKey])].map((_, i) => {
        return (<BurgerIngrediants key={ingrKey + i} type={ingrKey} />);
      });
    });
  
  console.log('TransormedIngredients: ', transormedIngredients);

  const allIngred = transormedIngredients.reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log('AllIngred: ', allIngred);

  return (
    <div className={classes.Burger}>
      <BurgerIngrediants type="bread-top"/>
      {allIngred}
      <BurgerIngrediants type="bread-bottom"/>
    </div>
  );
}

export default Burger;

import React from 'react';
import Classes from './Build-Controls.module.css';
import BuildControl from './Build-Control/Build-Control';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
  <div className={Classes.BuildControls}>
    <p> <strong> Current price: {props.price.toFixed(2)} </strong> </p>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <button
      className={Classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    > ORDER NOW </button>
  </div>
)

export default BuildControls;

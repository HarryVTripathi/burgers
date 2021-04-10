import React, { Component } from 'react';
import Classes from './Modal.module.css';
import Aux from '../../../HOC/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.show !== this.props.show);
  }

  componentDidUpdate() {
    console.log('[Modal] So this component really did update');
  }

  componentDidMount() {
    console.log('[Modal] If you\'re reading this message, then this component did mount');
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}></Backdrop>
        <div
          className={Classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;

import React, { Component, Fragment } from 'react';
import Cow from './Cow.jsx';

export default class CowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
    this.submitCowProxy = this.submitCowProxy.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitCowProxy(e) {
    e.preventDefault();
    this.props.submitCow(this.state);
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {

    return (
      <Fragment>
        <form onSubmit={this.submitCowProxy}>
          <input
            type="text"
            placeholder="Add a cow name..."
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Add a cow description..."
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br />
          <button>Add!</button>
        </form>
      </Fragment>
    );
  }
}
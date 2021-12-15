import React, { Component, Fragment } from 'react';
import Cow from './Cow.jsx';

export default class Cows extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    const mappedCows = this.props.cows.map(cow => (
      <Cow
        key={cow.id}
        cowObj={cow}
        nameClick={this.props.nameClick}
      />
    ));
    return (
      <Fragment>
        <h1>Welcome to the Farm!</h1>
        {mappedCows}
      </Fragment>
    );
  }
}
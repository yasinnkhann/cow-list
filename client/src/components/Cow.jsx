import React, { Component, Fragment } from 'react';

export default class Cow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <Fragment>
        <div>
          <li>{this.props.cowObj.name}</li>
        </div>
      </Fragment>
    );
  }
}
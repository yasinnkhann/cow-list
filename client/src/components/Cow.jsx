import React, { Component, Fragment } from 'react';

export default class Cow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // BINDERS
  };

  render() {
    return (
      <Fragment>
        <div>
          <li onClick={() => this.props.nameClick(this.props.cowObj)}>
            {this.props.cowObj.name}
          </li>
        </div>
      </Fragment>
    );
  }
}
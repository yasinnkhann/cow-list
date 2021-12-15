import React, { Component, Fragment } from 'react';

export default class CowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    return (
      <Fragment>
        {this.props.isModalClicked && (
        <form>
          <fieldset>
            Name: {this.props.cow.name}
            <br />
            {' '}
            Description: {this.props.cow.description}
          </fieldset>
        </form>
        )}
      </Fragment>
    );
  }
}
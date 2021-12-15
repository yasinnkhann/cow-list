import React, { Component, Fragment } from 'react';

export default class CowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedName: '',
      updatedDescription: ''
    };
    // BINDERS
    this.handleChange = this.handleChange.bind(this);
    this.updateCowProxy = this.updateCowProxy.bind(this);
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  updateCowProxy() {
    this.props.updateCow({
      name: this.state.updatedName,
      description: this.state.updatedDescription
    });

    this.setState({
      updatedName: '',
      updatedDescription: ''
    });
  }

  render() {

    return (
      <Fragment>
        {this.props.isModalClicked && (
        <div>
          <fieldset>
            Name: {this.props.cow.name}
            <br />
            {' '}
            Description: {this.props.cow.description}
            <br />
            ID: {this.props.cow.id}
            <br />
            <br />
            <input
              type="text"
              placeholder="Update Cow Name..."
              name="updatedName"
              value={this.state.updatedName}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="Update Cow Description..."
              name="updatedDescription"
              value={this.state.updatedDescription}
              onChange={this.handleChange}
            />
            <br />
            <button
              onClick={this.updateCowProxy}>
              Update!
            </button>
            <br />
            <br />
            <button
              onClick={this.props.deleteCow}>
              Remove Cow
            </button>
            <br />
            <br />
            <button onClick={this.props.closeModal}>
              Close
            </button>
          </fieldset>
        </div>
        )}
      </Fragment>
    );
  }
}
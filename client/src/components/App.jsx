import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Cows from './Cows.jsx';
import CowForm from './CowForm.jsx';
import CowModal from './CowModal.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: [],
      selectedCow: {},
      isModalClicked: false
    };
    // BINDERS
    this.handleSubmitCow = this.handleSubmitCow.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
  }

  componentDidMount() {
    // try {
    //   const res = await axios.get('http://localhost:3000/api/cows');
    //   this.setState({ cowList: res.data });
    // } catch (err) {
    //   console.error(err);
    // }

    axios.get('http://localhost:3000/api/cows')
      .then(res => {
        console.log(res.data);
        this.setState({ cowList: res.data });
      })
      .catch(err => {
        console.error(err);
      })
  }

  handleSubmitCow(submittedCow) {
    axios.post('http://localhost:3000/api/cows', submittedCow)
      .then(() => {
        return axios.get('http://localhost:3000/api/cows')
          .then(res => {
            console.log(res.data);
            this.setState({ cowList: res.data });
          })
      })
      .catch(err => console.error(err))
  }

  handleNameClick(cow) {
    this.setState({
      selectedCow: cow,
      isModalClicked: true
    })
  }

  render() {
    return (
      <Fragment>
        <CowModal
          cow={this.state.selectedCow}
          isModalClicked={this.state.isModalClicked}
        />
        <Cows
          cows={this.state.cowList}
          nameClick={this.handleNameClick}
        />
        <br />
        <CowForm submitCow={this.handleSubmitCow} />
      </Fragment>
    );
  }
}
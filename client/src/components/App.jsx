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
      isModalClicked: false,
    };
    // BINDERS
    this.handleSubmitCow = this.handleSubmitCow.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleUpdateCow = this.handleUpdateCow.bind(this);
    this.handleDeleteCow = this.handleDeleteCow.bind(this);
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
    if (!submittedCow.name || !submittedCow.description) {
      alert('Fill out both fields')
    } else {
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

  }

  handleNameClick(cow) {
    this.setState({
      selectedCow: cow,
      isModalClicked: true
    })
  }

  handleCloseModal() {
    this.setState({ isModalClicked: false });
  }

  handleUpdateCow(updatedCow) {
    console.log(updatedCow);
    if (!updatedCow.name && !updatedCow.description) {
      alert('Fill out the fields');
      return;
    }
    if (!updatedCow.name) {
      updatedCow.name = this.state.selectedCow.name;
    }
    if (!updatedCow.description) {
      updatedCow.description = this.state.selectedCow.description;
    }
    axios.put(`http://localhost:3000/api/cows/${this.state.selectedCow.id}`, updatedCow)
      .then(() => {
        return axios.get('http://localhost:3000/api/cows')
          .then(res => {
            console.log('UPDATED COWS: ', res.data);
            this.setState({ cowList: res.data });
          })
      })
      .catch(err => console.error(err))
  }

  handleDeleteCow() {
    axios.delete(`http://localhost:3000/api/cows/${this.state.selectedCow.id}`)
      .then(() => {
        return axios.get('http://localhost:3000/api/cows')
          .then(res => {
            console.log('UPDATED COWS: ', res.data);
            this.setState({ cowList: res.data });
          })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Fragment>
        <CowModal
          cow={this.state.selectedCow}
          isModalClicked={this.state.isModalClicked}
          closeModal={this.handleCloseModal}
          updateCow={this.handleUpdateCow}
          deleteCow={this.handleDeleteCow}
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
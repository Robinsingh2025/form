import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      isFriendly: true,
      gender: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          value={this.state.firstName}
          name='firstName'
          placeholder='First Name'
          onChange={this.handleChange}
        />
        <br />
        <input
          type='text'
          value={this.state.lastName}
          name='lastName'
          placeholder='Last Name'
          onChange={this.handleChange}
        />
        <br />
        <textarea value={'Some Default value'} onChange={this.handleChange} />
        <br />
        <label htmlFor=''>
          <input
            type='checkbox'
            checked={this.state.isFriendly}
            value={this.state.isFriendly}
            name='isFriendly'
            onChange={this.handleChange}
          />
          Is Friendly?
        </label>
        <br />
        <label>
          <input
            type='radio'
            name='gender'
            value='male'
            checked={this.state.gender === 'male'}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type='radio'
            name='gender'
            value='female'
            checked={this.state.gender === 'female'}
            onChange={this.handleChange}
          />
          Female
        </label>

        <br />
        <h1>
          {this.state.firstName} {this.state.lastName}
          you are a {this.state.gender}
        </h1>
      </form>
    );
  }
}

export default App;

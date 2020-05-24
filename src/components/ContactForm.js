import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    age: ""
  };

  //   constructor() {
  //     super();
  //     this.state = {
  //       firstname: "",
  //       lastname: "",
  //       age: ""
  //     };
  //   }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({
      firstname: "",
      lastname: "",
      age: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label>First Name</label>
        <br />
        <input
          type="text"
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleInputChange}
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          name="lastname"
          value={this.state.lastname}
          onChange={this.handleInputChange}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          type="number"
          name="age"
          min="1"
          max="100"
          value={this.state.age}
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">ADD PERSON</button>
      </form>
    );
  }
}
export default ContactForm;

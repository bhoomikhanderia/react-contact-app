import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    age: ""
  };

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
    const isEnabled =
      this.state.firstname.length > 0 &&
      this.state.lastname.length > 0 &&
      this.state.age.length > 0;
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <h4>ADD A NEW PERSON</h4>
        <label>First Name</label>
        <br />
        <input
          type="text"
          name="firstname"
          pattern="[A-Za-z]+"
          value={this.state.firstname}
          onChange={this.handleInputChange}
          title="First name should only contain letters. e.g. Frank"
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          name="lastname"
          pattern="[A-Za-z]+"
          value={this.state.lastname}
          onChange={this.handleInputChange}
          title="Last name should only contain letters. e.g. Johnson"
        />
        <br />
        <label>Age</label>
        <br />
        <input
          type="text"
          name="age"
          pattern="\d*"
          value={this.state.age}
          onChange={this.handleInputChange}
          title="Age should only contain numbers."
        />
        <br />
        <button type="submit" className="addbtn" disabled={!isEnabled}>
          ADD PERSON
        </button>
      </form>
    );
  }
}
export default ContactForm;

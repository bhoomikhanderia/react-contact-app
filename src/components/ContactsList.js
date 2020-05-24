import React, { Component } from "react";
import ContactForm from "./ContactForm";

class ContactsList extends Component {
  state = {
    list: this.returnList()
  };

  returnList() {
    if (localStorage.getItem("contacts") == null)
      localStorage.setItem("contacts", JSON.stringify([]));
    return JSON.parse(localStorage.getItem("contacts"));
  }

  onAddContact = data => {
    var list = this.returnList();
    list.push(data);
    localStorage.setItem("contacts", JSON.stringify(list));
    this.setState({ list });
  };

  handleDelete = index => {
    var list = this.returnList();
    list.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(list));
    this.setState({ list });
  };

  render() {
    return (
      <div>
        <h3>List of Contacts</h3>
        <table>
          <thead>
            <tr>
              <td>FIRST NAME</td>
              <td>LAST NAME</td>
              <td>AGE</td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            {this.state.list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.age}</td>
                  <td>
                    <button onClick={() => this.handleDelete(index)}>
                      REMOVE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <hr />
        <ContactForm onAddContact={this.onAddContact} />
      </div>
    );
  }
}
export default ContactsList;

import React, { Component } from "react";
import "./App.css";
import shortid from "shortid";
import ContactForm from "./Components/ContactForm";

class App extends Component {
  shortid = require("shortid");

  state = {
    contacts: [
      { name: "Alexandr Seleznov", id: 1, number: 5552233 },
      { name: "Kostya Seleznov", id: 2, number: 6662233 },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleSubmit = (contact) => {
    console.log("contact", contact);
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <>
        <ContactForm formSubmitHandler={this.handleSubmit} />
        <label>
          Поиск
          <input name="filter" onChange={this.handleInput}></input>
        </label>
        <ul>
          {this.getVisibleContacts().map((contact) => (
            <li key={contact.id}>
              {contact.name} {contact.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default App;

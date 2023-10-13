import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactsForm/ContactsForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactsList/ContactsList";

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
  }

addContact = newContact => {
  this.setState(prevState => ({
    contacts: [...prevState.contacts, {...newContact, id: nanoid()}],
  }));
};

changeFilter = value => {
  this.setState(() => ({
    filter: value,
  }));
};

filterContacts = () => {
  return this.state.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(this.state.filter.toLowerCase());
  });
};

render() {
  const filterContacts = this.filterContacts();
  return (
    <div>
      
      <ContactForm 
      toAdd={this.addContact}/>
      <h2>Contacts</h2>
      <Filter 
      onChange = {this.changeFilter}/>
      <ContactList 
      contacts = {filterContacts}/>
    </div>
  )
}

}




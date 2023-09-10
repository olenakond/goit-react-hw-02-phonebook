import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = dataFromForm => {
    const isContactExist = this.state.contacts.find(
      contact => contact.name === dataFromForm.name
    );
    if (isContactExist) {
      return alert(`${dataFromForm.name} is already in contacts.`);
    }

    const newContact = {
      ...dataFromForm,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handleFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  createContactsByfilter = () => {
    if (!this.state.filter) {
      return;
    }
    const ContactsByFilter = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return ContactsByFilter;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.createContactsByfilter() ?? this.state.contacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;

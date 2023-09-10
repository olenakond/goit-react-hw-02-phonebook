import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Container, Title, TitleList } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
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
      <Container>
        <Title>Phonebook</Title>
        <ContactForm createContact={this.createContact} />
        <TitleList>Contacts</TitleList>
        <Filter handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.createContactsByfilter() ?? this.state.contacts}
          handleDelete={this.handleDelete}
        />
      </Container>
    );
  }
}

export default App;

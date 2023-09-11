import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Button } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact({ ...this.state });
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <Input
          onChange={this.handleChange}
          value={this.state.name}
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="[A-Za-z]{1,32}"
          title="Name may contain only letters. For example Adrian, Jacob."
          required
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <Input
          onChange={this.handleChange}
          value={this.state.number}
          id={this.numberInputId}
          type="tel"
          name="number"
          pattern="[0-9]{1,32}"
          title="Phone number must be digits"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;

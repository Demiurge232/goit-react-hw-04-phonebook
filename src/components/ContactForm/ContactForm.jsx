import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  PhonebookForm,
  PhonebookButton,
  PhonebookInput,
} from './ContactForm.styled';

class ContactForm extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    this.props.addContact(name.value, number.value);
    this.reset(event);
  };

  reset = event => {
    const { name, number } = event.target.elements;
    name.value = '';
    number.value = '';
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <PhonebookInput
          id={this.nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <PhonebookInput
          id={this.numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <PhonebookButton type="submit">Add contact</PhonebookButton>
      </PhonebookForm>
    );
  }
}

export default ContactForm;

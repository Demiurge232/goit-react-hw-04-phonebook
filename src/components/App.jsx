import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const storageContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(storageContacts);
    return parseContacts ? [...parseContacts] : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return;
    } else {
      setContacts(prevContacts => [contact, ...prevContacts]);
    }
  };

  const findContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const renderFindContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={findContacts} />
      <ContactList
        contacts={renderFindContacts()}
        deleteContact={deleteContact}
      />
      <ToastContainer />
    </div>
  );
}

/////
// CLASS VERSION
/////

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contacts);
//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }

//   addContact = (name, number) => {
//     const { contacts } = this.state;
//     const contact = {
//       name,
//       number,
//       id: nanoid(),
//     };
//     if (contacts.find(contact => contact.name === name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [contact, ...contacts],
//       }));
//     }
//   };

//   findContacts = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   renderFindContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.renderFindContacts();

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.findContacts} />
//         <ContactList
//           contacts={visibleContacts}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;

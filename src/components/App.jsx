import { Component } from 'react';
import Notiflix from 'notiflix';
import css from './App.module.css';
import { ContactForm } from './Contact-form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contact-list/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const data = localStorage.getItem('contacts');
    const dataParse = JSON.parse(data) || [];

    this.setState({ contacts: [...dataParse] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmitForm = data => {
    const filterName = this.state.contacts.some(
      contact => contact.name === data.name
    );

    if (filterName) {
      Notiflix.Notify.failure(
        `The name ${data.name} is already in your contacts`
      );

      return;
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, data] };
      });
    }
  };

  onFilter = filter => {
    this.setState({ filter: filter });
  };

  getFilteredContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase().trim();

    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };

  handleDeleteContact = contactName => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.name !== contactName
        ),
      };
    });
  };

  render() {
    return (
      <div className={css.section}>
        <h1 className={css.title}>Phonebooks</h1>
        <ContactForm onSubmit={this.handleSubmitForm} />
        <h2 className={css.title}>Contacts</h2>
        <Filter filter={this.onFilter} />
        <ContactList
          filteredContacts={this.getFilteredContacts}
          deleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

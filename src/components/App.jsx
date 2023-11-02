import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import css from './App.module.css';
import { ContactForm } from './Contact-form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contact-list/ContactList';

export const App = () => {

  const [contacts, setContacts] = useState( () => JSON.parse(localStorage.getItem('contacts')) || [] );
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitForm = data => {
    const filterName = contacts.some(contact => contact.name === data.name);

    if (filterName) {
      Notiflix.Notify.failure(
        `The name ${data.name} is already in your contacts`
      );
      return;
    } else {
      setContacts(prevState => [...prevState, data]);
    }
  };

  const onFilter = filterName => {
    setFilterName(filterName);
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filterName.toLowerCase().trim();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };

  const handleDeleteContact = contactName => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.name !== contactName);
    });
  };

  return (
    <div className={css.section}>
      <h1 className={css.title}>Phonebooks</h1>
      <ContactForm onSubmit={handleSubmitForm} />
      <h2 className={css.title}>Contacts</h2>
      <Filter filter={onFilter} />
      <ContactList
        filteredContacts={getFilteredContacts()}
        deleteContact={handleDeleteContact}
      />
    </div>
  );
};

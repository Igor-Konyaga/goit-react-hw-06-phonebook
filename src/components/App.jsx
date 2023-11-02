import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import css from './App.module.css';
import { ContactForm } from './Contact-form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contact-list/ContactList';

export const App = () => {
  //   const getFilteredContacts = () => {
  //     const normalizeFilter = filterName.toLowerCase().trim();

  //     return contacts.filter(contact => {
  //       return contact.name.toLowerCase().includes(normalizeFilter);
  //     });
  //   };

  return (
    <div className={css.section}>
      <h1 className={css.title}>Phonebooks</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const currentValue = e.target.value;
    const currentName = e.target.name;

    if (currentName === 'name') {
      setName(currentValue);
    } else {
      setNumber(currentValue);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number, id: nanoid() });

    reset();
  };

  return (
    <form action="#" onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          onChange={handleInput}
          value={name}
          name="name"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          onChange={handleInput}
          value={number}
          name="number"
          required
        />
      </label>

      <button className={css.btn} type="submit">
        add contact
      </button>
    </form>
  );
};

import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsRedux';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const contact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContact(contact));

    e.currentTarget.reset();
  };

  return (
    <form  onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input className={css.input} type="text" name="name" required />
      </label>
      <label className={css.label}>
        Number
        <input className={css.input} type="tel" name="number" required />
      </label>

      <button className={css.btn} type="submit">
        add contact
      </button>
    </form>
  );
};


import css from './ContactList.module.css';

export const ContactList = ({ deleteContact, filteredContacts }) => {
  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.listItem} key={contact.id}>
            <p className={css.itemName}>{contact.name}:</p>
            <p className={css.itemTel}>{contact.number}</p>
            <button
              className={css.button}
              onClick={() => deleteContact(contact.name)}
              type="button"
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

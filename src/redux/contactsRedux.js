import Notiflix from 'notiflix';

const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      const audit = state.contacts.some(
        contact => contact.name === action.payload.name
      );

      if (audit) {
        Notiflix.Notify.failure(
          `The name ${action.payload.name} already exists in contacts`
        );
        return;
      } else {
        state.contacts = [...state.contacts, action.payload];
      }
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      const normalizeFilter = action.payload.toLowerCase().trim();

      state.contacts = state.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(normalizeFilter);
      });
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

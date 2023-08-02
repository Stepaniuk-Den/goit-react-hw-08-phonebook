import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOperations';
import { handlePending, handleRejected } from '../auth/userReducer';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const stateArr = [fetchContacts, addContact, deleteContact];

const handler = status => {
  return stateArr.map(item => item[status]);
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;

        // -------- 1st method --------
        state.contacts.push(action.payload);

        // -------- 2nd method --------
        // state.contacts = [action.payload, ...state.contacts];
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;

        // -------- 1st method --------
        const deletedContactIndex = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(deletedContactIndex, 1);

        // -------- 2nd method --------
        // state.contacts = state.contacts.filter(
        //   contact => contact.id !== action.payload.id
        // );
      })

      .addMatcher(isAnyOf(...handler('rejected')), handleRejected)
      .addMatcher(isAnyOf(...handler('pending')), handlePending),
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContact } = contactsSlice.actions;

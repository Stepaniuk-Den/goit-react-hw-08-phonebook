import React, { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Section from 'components/Section/Section';
import ContactList from 'components/ContactList/ContactList';
import { FilterBar } from 'components/FilterContact/FilterBar';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsReducer';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import Loader from 'components/Loader/Loader';
import withAuthRedirect from 'HOC/withAuthRedirect';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  selectUserData,
} from 'redux/selectors';

export const Contacts = () => {
  const userData = useSelector(selectUserData);
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) return;

    dispatch(fetchContacts());
  }, [dispatch, userData]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  const onAddContact = contactData => {
    dispatch(addContact(contactData));
  };

  const onDublicate = dublicated => {
    const dublicate = contacts.filter(contact => contact.name === dublicated);
    return dublicate.length > 0;
  };

  const onFilter = filterValue => {
    dispatch(filterContact(filterValue));
  };

  const onRemoveContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const showLoader = isLoading;
  const showError = error;

  return (
    <div className="container">
      {showError && (
        <div>
          <p>Opps, some error occured... Error: {error}</p>
        </div>
      )}
      {showLoader && <Loader />}
      <Section title="Phonebook">
        <ContactForm onAddContact={onAddContact} onDublicate={onDublicate} />
      </Section>
      <Section title="Contacts">
        <FilterBar filter={filter} onFilter={onFilter} />
        <ContactList
          contacts={filteredContact}
          onRemoveContact={onRemoveContact}
        />
      </Section>
    </div>
  );
};

export default withAuthRedirect(Contacts);

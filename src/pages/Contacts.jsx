import React, { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Section from 'components/Section/Section';
import ContactList from 'components/ContactList/ContactList';
import { FilterBar } from 'components/FilterContact/FilterBar';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsReducer';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contactsOperations';
import Loader from 'components/Loader/Loader';
import withAuthRedirect from 'HOC/withAuthRedirect';

export const Contacts = () => {
  const userData = useSelector(state => state.user.userData);
  const filter = useSelector(state => state.phonebook.filter);
  const selectContacts = useSelector(state => state.phonebook.contacts);
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const error = useSelector(state => state.phonebook.error);

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
    const dublicate = selectContacts.filter(
      contact => contact.name === dublicated
    );
    return dublicate.length > 0;
  };

  const onFilter = filterValue => {
    dispatch(filterContact(filterValue));
  };

  const onRemoveContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContact = selectContacts.filter(contact =>
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

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import Loader from 'components/Loader/Loader';

// import withAuthRedirect from 'HOC/withAuthRedirect';
// import AddContactForm from 'components/Contact/Contact';
// import { deleteContact, fetchContacts } from 'redux/contactsOperations';

// const Contacts = () => {
//   const dispatch = useDispatch();
//   const userData = useSelector(state => state.user.userData);
//   const contacts = useSelector(state => state.phonebook.contacts);
//   const isLoading = useSelector(state => state.phonebook.isLoading);
//   const error = useSelector(state => state.phonebook.error);

//   useEffect(() => {
//     if (!userData) return;

//     dispatch(fetchContacts());
//   }, [dispatch, userData]);

//   const handleDeleteContact = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   const showContacts = Array.isArray(contacts) && contacts.length > 0;
//   const showEmptyContactsMessage =
//     Array.isArray(contacts) && contacts.length === 0 && !isLoading;
//   return (
//     <div>
//       <h1>Contacts</h1>
//       <AddContactForm />
//       {isLoading && <Loader />}
//       {error && <p>{error}</p>}
//       <ul>
//         {showContacts &&
//           contacts.map(contact => {
//             return (
//               <li key={contact.id}>
//                 <p>
//                   <b>{contact.name}</b> : {contact.number}{' '}
//                   <button
//                     disabled={isLoading}
//                     onClick={() => handleDeleteContact(contact.id)}
//                   >
//                     &times;
//                   </button>
//                 </p>
//               </li>
//             );
//           })}
//       </ul>
//       {showEmptyContactsMessage && (
//         <h2>There are no contacts added to your list!</h2>
//       )}
//     </div>
//   );
// };

export default withAuthRedirect(Contacts);

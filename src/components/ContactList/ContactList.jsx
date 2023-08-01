import React from 'react';
import PropTypes from 'prop-types';
import { StyledContactList } from './ContactList.styled';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts, onRemoveContact }) => {
  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  return (
    <StyledContactList>
      {showContacts &&
        contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onRemoveContact={onRemoveContact}
            />
          );
        })}
    </StyledContactList>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};
export default ContactList;

import React from 'react';
import PropTypes from 'prop-types';
import { StyledContact } from './Contact.styled';

const Contact = ({ contact, onRemoveContact }) => {
  return (
    <StyledContact>
      <span>
        {contact.name} : {contact.number}
      </span>
      <button type="button" onClick={() => onRemoveContact(contact.id)}>
        Delete
      </button>
    </StyledContact>
  );
};
Contact.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
}.isRequired;
export default Contact;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsOperations';
// import Button from '@mui/material/Button';

// const AddContactForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = evt => {
//     evt.preventDefault();

//     const elements = evt.currentTarget.elements;

//     const name = elements.contactName.value;

//     const number = elements.contactNumber.value;

//     dispatch(addContact({ name, number }));
//     evt.currentTarget.reset();
//   };

//   return (
//     <div>
//       <h2>Add contact</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <b>Name: </b>
//           <input type="text" name="contactName" required />
//         </label>

//         <label>
//           <b>Number: </b>
//           <input type="text" name="contactNumber" required />
//         </label>

//         <Button type="submit" variant="contained">
//           Add contact
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default AddContactForm;

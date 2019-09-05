import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/contact/contactContext'; 
import ContactItem from './ContactItem';

const Contacts = () => {
const contactContext = useContext(ContactContext);

// pull out the contacts from the state
const { contacts } = contactContext;

return (
  <Fragment>
    {
      contacts.map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))
    }
  </Fragment>
)
}

export default Contacts;

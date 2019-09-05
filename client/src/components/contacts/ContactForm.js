import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

// form to add and update contacts
const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  // lifecycle method of componentDidMount
  useEffect(() => {
    // setting the form to current data
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      })
    }
  }, [contactContext, current]);

  // instead of setting each field, setting a single object i.e. contact
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e => {
    const { target: { name, value } } = e;
    setContact({
      ...contact,
      [name]: value
    });
  }

  const onSubmit = e => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    clearAll();
  }

  const clearAll = () => {
    clearCurrent();
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange}/>
      <input type="email"  placeholder="Email" name="email" value={email} onChange={onChange}/>
      <input type="text"  placeholder="Phone" name="phone" value={phone} onChange={onChange}/>      
      <h5>Contact Type</h5>
      <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> Personal {' '}
      <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} /> Professional {' '}
      <div>
        <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block"/>
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  )
}

export default ContactForm;

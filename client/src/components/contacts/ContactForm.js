import React, { useState } from 'react';

// form to add and update contacts
const ContactForm = () => {
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

  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={onChange}/>
      <input type="email"  placeholder="Email" name="email" value={email} onChange={onChange}/>
      <input type="text"  placeholder="Phone" name="phone" value={phone} onChange={onChange}/>      
      <h5>Contact Type</h5>
      <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> Personal {' '}
      <input type="radio" name="type" value="professional" checked={type === 'professional'} onChange={onChange} /> Professional {' '}
      <div>
        <input type="submit" value="Add Contact" className="btn btn-primary btn-block"/>
      </div>
    </form>
  )
}

export default ContactForm;

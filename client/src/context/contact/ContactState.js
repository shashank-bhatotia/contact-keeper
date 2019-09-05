import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  FILTER_CONTACTS,
  UPDATE_CONTACT,
  CLEAR_FILTER
} from '../types';
import { doesNotReject } from 'assert';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "Sarah Swanson",
        email: "sarah@gmail.com",
        phone: "222-222-2222",
        type: "professional"
      },
      {
        id: 3,
        name: "Henry Kane",
        email: "henry@gmail.com",
        phone: "333-333-333",
        type: "personal"
      },
      {
        id: 4,
        name: "Naomi Campbell",
        email: "naomi@gmail.com",
        phone: "444-444-4444",
        type: "personal"
      }
    ]
  };

  // state allows us to access the state
  // dispatch allows to dispatch objects to the reducer
  const [ state, dispatch ] = useReducer(contactReducer, initialState);

  // add contact

  // delete contact

  // set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider value={{
      contacts: state.contacts
    }} >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState;
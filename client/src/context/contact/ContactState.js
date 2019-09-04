import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
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
        phone: 999-9999-999,
        type: "personal"
      },
      {
        id: 2,
        name: "Sarah Swanson",
        email: "sarah@gmail.com",
        phone: 111-1111-111,
        type: "professional"
      },
      {
        id: 3,
        name: "Henry Kane",
        email: "henry@gmail.com",
        phone: 2121-21-2121,
        type: "personal"
      },
      {
        id: 4,
        name: "Naomi Campbell",
        email: "naomi@gmail.com",
        phone: 21-3123-1233
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
      contacts=state.contacts
    }} >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState;
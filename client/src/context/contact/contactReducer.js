import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  FILTER_CONTACTS,
  UPDATE_CONTACT,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    default:
      return state;
  }
}
import React, { useReducer } from 'react';
import uuid from 'uuid';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  // state allows us to access the state
  // dispatch allows to dispatch objects to the reducer
  const [ state, dispatch ] = useReducer(authReducer, initialState);

  // load user - check which user is logged in and load that data

  // register user

  // login user

  // logout user

  // clear errors


  return (
    <AuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error
    }} >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;
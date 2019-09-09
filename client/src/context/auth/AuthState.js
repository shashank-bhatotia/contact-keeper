import React, { useReducer } from 'react';
import axios from 'axios';
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
  CLEAR_ERRORS,
  CLEAR_CURRENT
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
  const [state, dispatch] = useReducer(authReducer, initialState);

  // load user - check which user is logged in and load that data
  const loadUser = () => console.log('loadUser');

  // register user
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/v1/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // login user
  const login = () => console.log('login');

  // logout user
  const logout = () => console.log('logout');

  // clear errors
  const clearErrors = () => dispatch({
    type: CLEAR_ERRORS
  })

  return (
    <AuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error,
      register,
      loadUser,
      login,
      logout,
      clearErrors
    }} >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;
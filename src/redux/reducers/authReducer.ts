// src/reducers/authReducer.ts

import { AuthState } from "../models/app-model";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, UPDATE_WATCHLIST } from "../types/types";


const initialState: AuthState = {
  currentUser: JSON.parse(localStorage.getItem('currentUser') || 'null'),
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, currentUser: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: null };
    case UPDATE_WATCHLIST:
      if (state.currentUser) {
        return { ...state, currentUser: { ...state.currentUser, watchlist: action.payload } };
      }
      return state;
    default:
      return state;
  }
};

export default authReducer;

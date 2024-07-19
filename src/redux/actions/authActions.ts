// src/actions/authActions.ts

import { clearCurrentUser, getUserData, saveCurrentUser, saveUserData } from "../../utils/localstorage";
import { AppThunk } from "../models/app-model";
import { GET_SEARCH_MOVIES_RESET, LOGIN_SUCCESS, LOGOUT_SUCCESS, RESET_FROM_WATCHLIST } from "../types/types";

export const login =
  (email: string): AppThunk =>
  async (dispatch: Function) => {
    let user: any = getUserData(email);
    if (!user) {
      user = { email, watchlist: [] };
      saveUserData(user);
    }
    saveCurrentUser(user);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  };

export const logout = (): AppThunk => async (dispatch) => {
  clearCurrentUser();
  dispatch({ type: GET_SEARCH_MOVIES_RESET });
  dispatch({ type: RESET_FROM_WATCHLIST });
  dispatch({ type: LOGOUT_SUCCESS });
};

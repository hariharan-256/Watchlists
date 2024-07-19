export type ResponseType = {
	type: string;
	payload: any;
};

export type Toggle = {
	isOpen:Boolean
};
export interface AuthState {
    currentUser: User | null;
  }
export interface User {
    email: string;
    watchlist: "";
  }

  import { ThunkAction } from 'redux-thunk';
  import { Action } from 'redux';
  import { RootState } from '../store';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
import { saveCurrentUser, saveUserData } from "../../utils/localstorage";
import { ResponseType } from "../models/app-model";
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST, RESET_FROM_WATCHLIST, SET_USER } from "../types/types";

const initialState = {
  email: "",
  watchlist: [],
};
const updateLocalStorage = (user: any) => {
  saveUserData(user);
  saveCurrentUser(user);
};
const watchlistReducer = (state = initialState, action: ResponseType) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = action.payload;
      updateLocalStorage(newState);
      return newState;
    case ADD_TO_WATCHLIST:
      newState = {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
      updateLocalStorage(newState);
      return newState;
    case REMOVE_FROM_WATCHLIST:
      newState = {
        ...state,
        watchlist: state?.watchlist?.filter((movie: any) => movie.imdbID !== action.payload),
      };
      updateLocalStorage(newState);
      return newState;
    case RESET_FROM_WATCHLIST:
      return { email: "", watchlist: [] };
    default:
      return state;
  }
};

export default watchlistReducer;

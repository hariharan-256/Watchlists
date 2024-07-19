import { combineReducers } from "redux";
import authReducer from "./authReducer";
import movieReducer from "./movieReducer";
import watchlistReducer from "./watchlistReducer";
import { toggleClickReducer } from "./filter";



// COMBINED REDUCERS
const reducers: object = {
    ToggleClickState:toggleClickReducer,
    auth: authReducer,
    movies: movieReducer,
    watchlist: watchlistReducer
};

export default combineReducers(reducers);

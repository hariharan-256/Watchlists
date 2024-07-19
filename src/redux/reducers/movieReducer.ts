import { ResponseType } from "../models/app-model";
import {  GET_MOVIE_DETAILS_SUCCESS, GET_SEARCH_MOVIES_FAILURE, GET_SEARCH_MOVIES_REQUEST, GET_SEARCH_MOVIES_RESET, GET_SEARCH_MOVIES_SUCCESS } from "../types/types";

const initialState = {
    fetching: false,
    searchResults: [],
    movieDetails: {},
    error:""
  };
  
  const movieReducer = (state = initialState, action:ResponseType) => {
      switch (action.type) {
            case GET_SEARCH_MOVIES_REQUEST:
                return {
                    ...state,
                    fetching: true,
                    error: "",
                };
            case GET_SEARCH_MOVIES_SUCCESS:
                return{ ...state,fetching: false, searchResults: action.payload }
            case GET_SEARCH_MOVIES_RESET:
                return {
                    fetching: false,
                    searchResults: [],
                    movieDetails: {},
                    error:""
                };
            case GET_SEARCH_MOVIES_FAILURE:
                return {
                    fetching: false,
                    error: action.payload,
                };
            case GET_MOVIE_DETAILS_SUCCESS:
                return { ...state,fetching: false, movieDetails: action.payload };
        default:
            return state;
        }
  };
  
  export default movieReducer;
  
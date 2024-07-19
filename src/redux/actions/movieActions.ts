import axios from "axios";
import { GET_MOVIE_DETAILS_SUCCESS, GET_SEARCH_MOVIES_FAILURE, GET_SEARCH_MOVIES_REQUEST, GET_SEARCH_MOVIES_SUCCESS } from "../types/types";
let APIkey = "4704abed";
export const searchMovies = (title: string) => async (dispatch: Function) => {
    try {
        dispatch({ type: GET_SEARCH_MOVIES_REQUEST });
        axios
            .get(
                `http://www.omdbapi.com/?s=${title}&apikey=${APIkey}`,
            )
            .then((response:any) => {
                dispatch({
                    type: GET_SEARCH_MOVIES_SUCCESS,
                    payload: response?.data?.Search,
                });
            });
    } catch (error:any) {
        dispatch({
            type: GET_SEARCH_MOVIES_FAILURE,
        });
    }
};

export const getMovieDetails = (id: any) => async (dispatch: Function) => {
    try {
        dispatch({ type: GET_SEARCH_MOVIES_REQUEST });
        axios
            .get(
                `http://www.omdbapi.com/?i=${id}&apikey=${APIkey}`,
            )
            .then((response:any) => {
                dispatch({
                    type: GET_MOVIE_DETAILS_SUCCESS,
                    payload: response?.data,
                });
            });
    } catch (error:any) {
        dispatch({
            type: GET_SEARCH_MOVIES_FAILURE,
        });
    }
};

import { movieServiceById } from "../services/movieServices";
import * as toast from '../utils/toast';
import {
    SEARCH_FAV_MOVIES,
    LOADING,
    ADD_FAVORITE_MOVIES,
    ERRORS,
    REMOVE_FAVORITE_MOVIES,
} 
from '../constants/action';

export const searchFavMovies = (value) => {
    return {
      type: SEARCH_FAV_MOVIES,
      payload: value
    }
}

export const setLoading = () => {
    return {
      type: LOADING
    }
}

export const modifyError = (payload) => {
    return { type: ERRORS  , payload}
}

export const addMovie = (payload) => {
    return { type: ADD_FAVORITE_MOVIES  , payload}
}

export const removeMovie = (payload) => {
    return { type: REMOVE_FAVORITE_MOVIES  , payload}
}

export const addFavoriteMovie = (favoriteMovies) => {
    
    return async (dispatch) => {
        try {
            await movieServiceById(favoriteMovies.id);        
            dispatch(addMovie(favoriteMovies));        
            toast.success({ title: "Your Favroites", message: favoriteMovies.title + " added to Favorites Successfully!"}) 
        } 
        catch(error) 
        {    
        const errMsg = error.response.data.status_message;  
        dispatch(modifyError(errMsg));
        toast.error({ title: "Oops", message: errMsg }) 
        }
    };
};

export const removeFavoriteMovie = (favoriteMoviesById) => {
    return async (dispatch) => {
        dispatch(removeMovie(favoriteMoviesById));        
        toast.success({ title: "Removed", message: favoriteMoviesById + " removed from Favorites Successfully!"}) 
        
    };    
}
  
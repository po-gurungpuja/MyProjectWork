import { movieServiceById } from "../services/movieServices";
//import * as toast from '../utils/toast';
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

export const addBeer = (payload) => {
    return { type: ADD_FAVORITE_MOVIES  , payload}
}

export const addFavoriteMovie = (favoriteMovies) => {
    
    return async (dispatch) => {
    try {
        await movieServiceById(favoriteMovies.id);        
        dispatch(addBeer(favoriteMovies));
        dispatch(modifyError(null));
    } 
    catch(error) 
    {    
      const errMsg = error.response.data.data[0].msg;  
      dispatch(modifyError(errMsg));
      //toast.error({ title: "Oops", message: errMsg }) 
    }
    };
};

export const removeFavoriteMovie = (favoriteMoviesById) => {
    return { type: REMOVE_FAVORITE_MOVIES , payload: favoriteMoviesById}
}
  
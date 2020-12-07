import {
    SEARCH_FAV_MOVIES,
    LOADING,
    ADD_FAVORITE_MOVIES,
    REMOVE_FAVORITE_MOVIES,
    ERRORS,
} 
from '../constants/action';

const initialState = {
    favoriteMovies: [],
    value: "", 
    loading: false,
    error: null,
}

const favoriteMoviesReducer = (state = initialState, action ) => {
    switch (action.type) {        
        
        case LOADING:
            return {
                ...state,
                loading: true
            }

        case SEARCH_FAV_MOVIES:
            return {
                ...state,                
                value: action.payload
            } 
            
        case ADD_FAVORITE_MOVIES:
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload],
            }

        case REMOVE_FAVORITE_MOVIES:
            return {
                ...state,
                favoriteMovies: state.favoriteMovies.filter(
                    (Movie) => Movie.id !== action.payload
                  ),
                } 

        case ERRORS:
            return {
                ...state,
                error: action.payload,
            } 
                  
        default:
            return state;
    }
};

export default favoriteMoviesReducer;
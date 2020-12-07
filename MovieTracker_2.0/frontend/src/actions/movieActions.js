import { movieServices, searchMovieByName, movieServiceById } from '../services/movieServices';
import {    
    SEARCH_MOVIE,
    GET_MOVIES_PENDING,
    GET_MORE_MOVIES_PENDING, 
    GET_MOVIES_SUCCESS, 
    GET_MORE_MOVIES_SUCCESS,
    ERROR_FETCHING_MOVIES,
    GET_MOVIE_SUCCESS,
    ERROR_FETCHING_MOVIE
    } from '../constants/action';

export const fetchMovies = () => {    
    return async (dispatch) => {
        try {
            dispatch(fetchMoviesPending());
            const data = await movieServices();                 
            dispatch(fetchMoviesSuccess(data));
        }
        catch(error) {
            const errorMsg = error.message;
            dispatch(fetchMoviesError(errorMsg));
        }       
    };
};

export const fetchMoreMovies = (pageNumber, movieName) => {
    return async (dispatch) => {
        try {
            dispatch(fetchMoreMoviesPending());
            const data = await movieServices(pageNumber, movieName); 
            
            dispatch(fetchMoreMoviesSuccess(data));
            dispatch(fetchMoviesError(null));
        }
        catch(error) {
            const errorMsg = error.message;
            dispatch(fetchMoviesError(errorMsg));
        }
    }
};

export const searchMovies = (pageNumber, movieName) => {
  return async (dispatch) => {
      try {
          dispatch(fetchMoreMoviesPending());
          const data = await searchMovieByName(pageNumber, movieName);
          
         
          dispatch(fetchMoreMoviesSuccess(data));
          dispatch(fetchMoviesError(null));
      }
      catch(error) {
          const errorMsg = error.message;
          dispatch(fetchMoviesError(errorMsg));
      }
  }
};

export const fetchMovie = (movieId) => {
  return async (dispatch) => {
      try {
        
          const data = await movieServiceById(movieId);         
          console.log(movieId);
          dispatch(fetchMovieSuccess(data));
          dispatch(fetchMovieError(null));
      }
      catch(error) {
          const errorMsg = error.message;
          dispatch(fetchMovieError(errorMsg));
      }
  }
};

export const fetchMovieError = (payload) => {
  return {
    type: ERROR_FETCHING_MOVIE,
    payload
  }
}

export const fetchMoviesError = (payload) => {
    return {
      type: ERROR_FETCHING_MOVIES,
      payload
    }
}

export const fetchMoviesPending = () => {
    return {
      type: GET_MOVIES_PENDING
    }
}
  
export const fetchMoreMoviesPending = () => {
    return {
      type: GET_MORE_MOVIES_PENDING
    }
}
  
export const fetchMoviesSuccess = (movies) => {
    return {
      type: GET_MOVIES_SUCCESS,
      payload: {
        movies: movies
      }
    }
}
  
export const fetchMoreMoviesSuccess = (movies) => {
    return {
      type: GET_MORE_MOVIES_SUCCESS,
      payload: {
        movies: movies
      }
    }
}

export const searchMovie = (text) => {
  return {
    type: SEARCH_MOVIE,
    payload: text
  }
}

export const fetchMovieSuccess = (movie) => {
  return {
    type: GET_MOVIE_SUCCESS,
    payload: {
      movie: movie
    }    
  }
}


  






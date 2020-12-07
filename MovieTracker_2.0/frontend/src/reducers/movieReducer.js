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

const initialState = {
    text: "",    
    pending: false,    
    loadMorePending: false,
    pageInfo: { page: 0 },
    movies: [],
    movie: [],   
    error: null      
};

const movieReducer = (state = initialState, action ) => {
    switch (action.type) {
        
        case GET_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            }

        case GET_MORE_MOVIES_PENDING:
            return {
                ...state,
                loadMorePending: true
            }

        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                pending: false,
                movies: action.payload.movies
            }

        case GET_MORE_MOVIES_SUCCESS:
            const newMoviesList = action.payload.movies
            const { movies, pageInfo, pending } = state
            let { page } = pageInfo;

            if (pending) {
                page= 0;
            }           
            
            return {
                ...state,
                movies: pending ? newMoviesList : [...movies, ...newMoviesList],
                pageInfo: {
                    ...pageInfo,
                    page: newMoviesList.length ? page + 1 : page
                },
                loadMorePending: !!newMoviesList.length,
                pending: false
            }
        
        case SEARCH_MOVIE:            
            return {
                ...state,
                text: action.payload,
                pending: true,
                
            }    
                 
        case ERROR_FETCHING_MOVIES:
            return {
                ...state,
                error: action.payload,
            } 
        
        case ERROR_FETCHING_MOVIE:
            return {
                ...state,
                error: action.payload,
            }  

        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                pending: false,
                movie: action.payload.movie
            }            
                  
        default:
            return state;
    }
};

export default movieReducer;


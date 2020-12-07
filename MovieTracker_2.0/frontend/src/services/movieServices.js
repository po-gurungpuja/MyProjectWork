import  http from '../utils/http';
import { APIKEY } from '../APIKEY';


export const movieServices = async (page = 1, movieName) => {
    const params = {
        api_key: APIKEY,  
        page: page   
    }
    if(!!movieName){
        params.query = movieName;
    }

    const { data : { results } } = await http.get("/discover/movie", {params});   
    
    return results;
}

export const searchMovieByName = async (page = 1, movieName) => {
    const params = {
        api_key: APIKEY,  
        page: page, 
        query: movieName       
    }

    const { data : { results } } = await http.get("/search/movie", {params});    
    
    return results;
}

export const movieServiceById = async (movieId)  => {
    const params = {
        api_key: APIKEY,
    }
    
    const { data } = await http.get(`/movie/${movieId}`, {params});
    
    return data;
}

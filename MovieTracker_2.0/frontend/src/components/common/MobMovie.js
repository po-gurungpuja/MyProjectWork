import React, { Component, Fragment } from 'react';
import { IMGURL } from '../../APIKEY';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';


class ShowMovie extends Component {
    render() {
        const { movie } = this.props.details;
        const { title, tagline, poster_path, status, runtime, popularity, genres, production_companies, 
            production_countries, spoken_languages, overview, imdb_id} = movie;
        
        let { release_date } = movie; 
        
        if (!!release_date) {
            release_date = release_date.slice(0,4);
        
        }   
        return (
            <Fragment>
                
                <div className="intra_container">        
                    <div className="cover-photo">
                        <img src={ poster_path == null ? null : `${IMGURL}${poster_path} `} alt="PIC" className="profile"/>
                                  
                    </div>
                    <div className="movie-name">
                        { title} 
                        <p className="director">
                            {
                                !!tagline && (
                                    <span className="name">({tagline})</span>
                                )
                            }                            
                        </p>
                    </div>
                    <div className="director_plot">                        
                        <div className="info">
                            <span className="info_detail">{release_date}</span>
                            <span className="info_detail">{runtime}&nbsp;mins</span>
                        </div>
                        <p className="about">
                            {overview}
                        </p>
                    </div>
                    <div className="container_button">
                        <a className="btn-primary" target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/` + imdb_id}>View IMDB</a>
                        <Link className="btn-primary" to={routes.HOME}>Go To Home</Link>
                    </div>
                    <div className="container_details">
                        <ul>
                            <li>
                                <span>Status : </span>
                                <p>{status}</p>
                            </li>
                            <li>
                                <span>Popularity : </span>
                                <p>{popularity} (Out of 2000)</p>
                            </li>
                            {
                                !!production_countries && (
                                    <li>
                                        <span>Country : </span>                                            
                                        {production_countries.map((country,id) => (
                                            <p className="inline" key={ id }>&nbsp;&nbsp;{ country.name }.</p>
                                        ))}                                            
                                    </li>
                            )}     
                            {
                                !!movie.genres && (
                                    <li>
                                        <span>Genres : </span>                                            
                                        {genres.map((genre,id) => (
                                            <p className="inline" key={ id }>&nbsp;&nbsp;{ genre.name }.</p>
                                        ))}
                                            
                                    </li>
                            )} 
                            {
                                !!production_companies && (
                                    <li>
                                        <span>Company : </span>                                            
                                        {production_companies.map((company,id) => (
                                            <p className="inline" key={ id }>&nbsp;&nbsp;{ company.name }.</p>
                                        ))}                                            
                                    </li>
                            )}  
                            {
                                !!spoken_languages && (
                                    <li>
                                        <span>Languages : </span>                                            
                                        {spoken_languages.map((language,id) => (
                                            <p className="inline" key={ id }>&nbsp;&nbsp;{ language.name }.</p>
                                        ))}                                            
                                    </li>
                            )}                              
                            
                            
                        </ul>
                    </div>                    
                
                </div>
            
            </Fragment>
        )
    }
}

export default ShowMovie
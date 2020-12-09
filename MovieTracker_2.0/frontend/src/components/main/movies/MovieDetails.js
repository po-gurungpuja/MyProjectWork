import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import { Header, Spinner } from '../../common';
import { connect } from 'react-redux';
import { movieActions } from '../../../actions';
import { bindActionCreators } from 'redux';
import { IMGURL, NA_IMG } from '../../../APIKEY';
import ShowMovie from '../../common/MobMovie';


export class MovieDetails extends Component { 
    
    componentDidMount() {       
      this.props.fetchMovie(this.props.match.params.movieid);
      this.props.fetchMoviesPending();      
    }
     
    render() { 
        const { pending, movie } = this.props;
        const { title, tagline, poster_path, status, runtime, popularity, genres, production_companies, 
            production_countries, spoken_languages, overview, imdb_id} = movie;
        let { release_date } = movie; 
        
        if (!!release_date) {
            release_date = release_date.slice(0,4);
        
        }       

        return (
            <Fragment>
                
                <Header />
                  
                {
                    pending ? <Spinner />
                    :(
                    <Fragment>
                        <div className="intro_container">
                        <div className="movie_container">
                          <div className="container_top"> 
                             <div className="container_title">
                                <h1>{ title}</h1>
                                {
                                    !!tagline && (
                                       <p className="tag_line">({tagline})</p>
                                    )
                                }
                                
                             </div>
                             <div className="container_inner_top">
                                <div className="img_container">
                                    <img src={ poster_path == null ? `${NA_IMG}` : `${IMGURL}${poster_path} `} alt="HI"/>
                                 </div>        
                                
                                 <div className="container_details">
                                    <ul>                                    
                                        
                                        <li>
                                            <span>Status : </span>
                                            <p className="container_details_list">&nbsp;{status}</p>
                                        </li>
                                        <li>
                                            <span>Year :</span>
                                            <p className="container_details_list">&nbsp;{release_date}</p>
                                        </li>
                                        <li>
                                            <span>Runtime :</span>
                                            <p className="container_details_list">&nbsp;{runtime}mins</p>
                                        </li>
                                        <li>
                                            <span>Popularity : </span>
                                            <p className="container_details_list">&nbsp;{popularity} (Out of 2000)</p>
                                        </li>
                                        {
                                         !!genres && (
                                            <li>
                                               <span>Genres : </span>
                                            
                                                {genres.map((genre,id) => (
                                                    <p className="container_details_list" key={ id }>&nbsp;&nbsp;{ genre.name }.</p>
                                                ))}
                                            
                                            </li>
                                        )}
                                        {
                                         !!production_companies && (
                                            <li>
                                               <span>Production Companies : </span>
                                            
                                                {production_companies.map((company,id) => (
                                                    <p className="container_details_list" key={ id }>&nbsp;&nbsp;{ company.name }-{company.origin_country},</p>
                                                ))}
                                            
                                            </li>
                                        )}
                                        {
                                         !!production_countries && (
                                            <li>
                                               <span>Country : </span>
                                            
                                                {production_countries.map((country,id) => (
                                                    <p className="container_details_list" key={ id }>&nbsp;&nbsp;{ country.name }.</p>
                                                ))}
                                            
                                            </li>
                                        )}
                                        {
                                         !!spoken_languages && (
                                            <li>
                                               <span>Languages : </span>
                                            
                                                {spoken_languages.map((language,id) => (
                                                    <p className="container_details_list" key={ id }>&nbsp;&nbsp;{language.english_name}.</p>
                                                ))}
                                            
                                            </li>
                                        )}
                                         
                                     </ul>
                                 </div>
                             </div>
                            
                         </div>
                         <div className="container_bottom">
                            <div className="container_plot">
                                 <h2>About Plot</h2>
                                 <p>{overview}</p>                    
                             </div>
                            
                             <div className="container_button">
                                 <a className="btn-primary" target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/` + imdb_id}>View IMDB</a>
                                 <Link className="btn-primary" to={routes.HOME}>Go To Home</Link>
                             </div>
                         </div>
                     </div>
                    
                    </div>
                        <ShowMovie details={this.props}/> 
                    </Fragment>
                    )   
                } 
                 
                                      
            </Fragment>
        )
    }    
}

const mapStateToProps = ({ movieReducer }) =>  {
    return {
        movie: movieReducer.movie,
        pending: movieReducer.pending
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        ...bindActionCreators({...movieActions}, dispatch),
     };
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);


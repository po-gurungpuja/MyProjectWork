import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IMGURL, NA_IMG } from '../../../APIKEY';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { favoriteActions } from '../../../actions';


export class Movie extends Component {

    toggleFavorites = () => {
        const { info, favoriteMovies, addFavoriteMovie, removeFavoriteMovie } = this.props;

        const movieIndex = favoriteMovies.findIndex(
            (Movie) => Movie.id === info.id);

        if(movieIndex > -1) {
            removeFavoriteMovie(info.id);
        }
        else {
            addFavoriteMovie(info);
        }
    }
    
    render() {
        const { title, poster_path, id } = this.props.info;
        const movieIndex = this.props.favoriteMovies.findIndex((Movie) => Movie.id === id);

        return (
            <Fragment>
                
                    <div className="card_item">
                        <div className="card_top">
                            <img src={ poster_path == null ? `${NA_IMG}` : `${IMGURL}${poster_path} `} alt="Movie Poster"/>
                        
                            <div className="card_info">                           
                                            
                                
                                <i className={` ${ movieIndex > -1 ? "fas" : "far"}  fa-heart `} onClick={ this.toggleFavorites }></i>
                                
                            </div>
                        </div> 
                        <div className="card_bottom">
                            <Link to={'/movie/' + id }  title={ title }><p>{ title }</p></Link>                            
                        </div>                
                    </div>
                    
            </Fragment>
        )
    }
}

const mapStateToProps = ({ favoriteMoviesReducer }) => {
    return { favoriteMovies: favoriteMoviesReducer.favoriteMovies }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        ...bindActionCreators({...favoriteActions}, dispatch),
     };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

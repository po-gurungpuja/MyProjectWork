import React, { Component, Fragment } from 'react';
import { Header, SearchBox } from '../common';
import Movie from '../main/movies/Movie';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { favoriteActions } from '../../actions';


class Favorites extends Component {

    setSearchText = (text) => {
        this.props.searchFavMovies(text);        
    }    

    render() {

        let { favoriteMovies, value } = this.props;

        if (!!value) {
            favoriteMovies = favoriteMovies.filter((Movie) =>
            Movie.title.toLowerCase().includes(value.toLowerCase())
            );
        }

        return (
            <Fragment>
                <Header />
                <SearchBox setSearchText = { this.setSearchText }/>

                <div className="card_container">
                    <div className="cards_wrap">                    
                        { !!favoriteMovies.length && (
                            favoriteMovies.map((movie) => (
                            <Movie key={movie.id} info={movie} />))                    
                        )}
                    </div>
                </div>                         
            </Fragment>
        )
    }    
}

const mapStateToProps = ({ favoriteMoviesReducer }) => {
    return {        
        value: favoriteMoviesReducer.value,
        favoriteMovies: favoriteMoviesReducer.favoriteMovies
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        ...bindActionCreators({...favoriteActions}, dispatch),
     };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

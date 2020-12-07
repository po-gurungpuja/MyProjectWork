import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IMGURL } from '../../../APIKEY';


export class Movie extends Component {
    
    render() {
        const { title, poster_path, id } = this.props.info;
        return (
            <Fragment>
                
                    <div className="card_item">
                        <div className="card_top">
                            <img src={ poster_path == null ? null : `${IMGURL}${poster_path} `} alt="Movie Poster"/>
                        
                            <div className="card_info">
                            
                                <i className="fas fa-plus"></i>
                                {/* <i className="fas fa-check-circle"></i>  */}
                            
                                <i className="far fa-heart"></i>
                                {/* <i className="fas fa-heart"></i>  */}
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

export default Movie;

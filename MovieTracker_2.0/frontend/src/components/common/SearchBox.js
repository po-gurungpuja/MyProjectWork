import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { movieActions } from '../../actions';

class SearchBox extends Component {

    onChange = e => {            
        this.props.searchMovie(e.target.value)
    }

    onSubmit = e => {
        e.preventDefault();        
        this.props.setSearchText(this.props.text);        
    }
    
    render() {
        return (
            <div className="searchBox">
                <div className="wrapper">        
                    <div className="heading">
                        <h1>Search Your Favorite Movies</h1>
                    </div>
                    <div className="search">
                        <form id="searchForm" onSubmit={ this.onSubmit }>
                            <input 
                            type="text"                            
                            className="input" 
                            placeholder="What are you looking for?"
                            onChange={ this.onChange }
                            />		
                            <button type="submit" className="searchbtn"><i className="fas fa-search"></i></button>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ movieReducer }) => {
    return {
        text: movieReducer.text,
        isLoading: movieReducer.isLoading,

    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        ...bindActionCreators({...movieActions}, dispatch),
     };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
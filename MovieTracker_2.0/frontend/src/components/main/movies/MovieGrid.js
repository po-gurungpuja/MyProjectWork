import React, { Component, Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Movie from './Movie';
import { SearchBox, Spinner } from '../../common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { movieActions } from '../../../actions';


class MovieGrid extends Component {
    
    
    scrollParentRef = null;

    setSearchText = (text) => {        
        const { pending } = this.props;            
        let { page } = this.props.pageInfo;

        if(pending) {
            page = 0;
        }

        this.props.searchMovies(page + 1, text);
        
    }
    
    loadMore = () => {
        let { page } = this.props.pageInfo;
        const { fetchMoreMovies } = this.props;

        fetchMoreMovies(page + 1);
    }

    componentDidMount() {              
        this.props.fetchMoreMovies();           
    }

    render() {
        
        const { movies , loadMorePending } = this.props;
        
        return (           
                <Fragment>
                    <SearchBox setSearchText = { this.setSearchText }/>
                    
                    <InfiniteScroll
                        dataLength = { movies.length } 
                        next = { (this.loadMore) }
                        hasMore = { loadMorePending }
                        loader = { <Spinner />}   >  
                    
                        <div className="card_container" ref = {(r) => (this.scrollParentRef = r)}>
                            <div className="cards_wrap">                    
                            {
                                movies.map((movie) => (
                                <Movie key={movie.id} info={movie} />))                    
                            }
                            </div>
                        </div>                                 
                    </InfiniteScroll>
                </Fragment>            
            )
    }
}

const mapStateToProps = ({ movieReducer }) => {
    return { 
        movies: movieReducer.movies,
        pending: movieReducer.pending,
        pageInfo: movieReducer.pageInfo,
        loadMorePending: movieReducer.loadMorePending,
        error: movieReducer.error,
        text: movieReducer.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        ...bindActionCreators({...movieActions}, dispatch),
     };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);


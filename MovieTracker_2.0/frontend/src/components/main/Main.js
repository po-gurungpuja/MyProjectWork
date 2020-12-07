import React, { Fragment } from 'react';
import { Header } from '../common/index';
import MovieGrid from './movies/MovieGrid';


const Main = () => {    
        
        return (
            <Fragment>
                <Header />                 
                <MovieGrid />         
            </Fragment> 
        )   
    
}


export default Main;
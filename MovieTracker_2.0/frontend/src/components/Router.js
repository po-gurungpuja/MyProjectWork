import React from 'react';
import Main from './main';
import Favorites from './favourites';
import * as routes from '../constants/routes';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import MovieDetails from './main/movies/MovieDetails';




const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path = {routes.HOME} component={Main} />
      <Route exact path = {routes.FAVORITES} component={Favorites} />
      <Route exact path ='/movie/:movieid' component={props => <MovieDetails {...props}/>} />     
    </Switch>
  </BrowserRouter>
);

export default Router;
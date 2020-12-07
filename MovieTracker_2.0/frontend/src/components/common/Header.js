import { Link } from "react-router-dom";
import * as routes from '../../constants/routes';
import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();

        this.state = {
            menuOpen: false,
        }
    }   

    toggle = () => {        
        document.getElementById("nav").style.width = "250px";              
        this.setState({ menuOpen: true });     
    }

    close = () => {
        document.getElementById("nav").style.width = "0"; 
        this.setState({ menuOpen: false });
    }
     
    render() {
        
        return (
            <div className="header">
                <div className="container">
                    <div className="header-logo">
                        <h1 className="logo">FavMovies</h1>
                    </div> 
                                        
                       
                    <div className="hamburger-menu" onClick = { this.toggle }>
                        <div className="header-menu">
                        </div>       
                    </div> 
                        
                    <div id="nav" className="navigation">
                        <div className="hamburger-menu-close" onClick = { this.close }>
                            <div className="header-menu">
                            </div>       
                        </div> 
                        <ul>
                            <li>
                                <Link to={routes.HOME}>Home</Link>
                            </li>
                            <li>
                                <Link to={routes.FAVORITES}>Favorites</Link>
                            </li>                                                       
                        </ul>
                    </div>       
                </div>
            </div>
        )
    }
}

export default Header;
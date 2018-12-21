import React, { Component } from 'react'
import {Link} from "react-router-dom"



class NavBar extends Component {
   
    render() { 
        return ( 
            <nav className="navbar navbar-default navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-header">
                         <img src='./images/world.png' alt="logo" />
                    </div>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/home"> Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/messages">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/recipies">Recipies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/memories">Memories</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/logout">Log Out</Link>
                    </li>
                </ul> 
            </nav>
     
    );
    }
}
 
export default NavBar;


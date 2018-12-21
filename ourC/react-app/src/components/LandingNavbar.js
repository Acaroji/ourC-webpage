import React,{ Component } from 'react'
import { Link } from "react-router-dom"

class LandingNavbar extends Component {
    render() { 
        return ( 
            <nav class="navbar navbar-default navbar-expand-lg">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <img src='./images/world.png' alt="logo" />
                    </div>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login">Log In</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/signup">Sign Up</Link>
                   </li>
                    
                </ul> 
            </nav>

         );
    }
}
 
export default LandingNavbar;

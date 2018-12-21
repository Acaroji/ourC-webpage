import React, {Component} from 'react';
import LandingNavbar  from './LandingNavbar';



class Landing extends Component {
  
    render() { 
        return ( 
            <div>
                < LandingNavbar />
                <div className="landing-page">
                    <div className="connected-message">Connected. No matter where you are.</div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            Keep all your good memories
                            <img src="./images/photography.png" alt="memories" />
                        </div>
                    <div className="col-sm">
                            Search your favorites recipies
                            <img src="./images/recipe-book (1).png" alt="recipies" />
                    </div>
                    <div className="col-sm">
                            Write a messages to your favorite persons
                            <img src="./images/email (2).png" alt="messages" />
                    </div>
                        </div>
                </div>
            
                </div>
            </div>
         );
    }
}
 
export default Landing;
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import Landing from "./components/Landing"
import SignUp from './components/SignUp';
import Memories from './components/Memories';
import Messages from './components/Messages';
import Recipies from './components/Recipies';

// import LandingNavbar from './components/LandingNavbar';

  
class App extends Component {

  state = {
    characters : []
  }

  constructor(){
    super()
    this.state={
      currentPage:'home',
      loggedIn:false,
      signedUp:false
    }
  }
  setPage=(page)=>{
  
    this.setState({currentPage:page})
  }
  setLoggedIn = (logged) =>{
  
    
    this.setState({loggedIn:logged})
    debugger
  }
  setSignedUp =(signed) =>{
  
    this.setState({signedUp:signed})
    debugger
  }
  render(){ 

console.log("hello")
    return(
      <div>
        
        <div className="content">
          <Route exact path="/" component={Landing} />
          <Route exact path="/memories" component={Memories} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/recipies" component={Recipies} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" render={(props)=> {
            return (<Login setLoggedIn={this.setLoggedIn}/>)
          }} />

          <Route exact path="/signup" render={(props)=> {
            return (<SignUp setSignedUp={this.setSignedUp}/>)
          }} />
          {this.state.signedUp ? <Redirect to="/home" /> :<div></div>} 
          {this.state.loggedIn ? <Redirect to="/home" /> : <div></div>}
        </div> 
      </div>
    )

  }
}
  
export default App;

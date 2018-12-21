import React,{ Component } from 'react'
import axios from 'axios'
import {Redirect} from "react-router-dom"
import LandingNavbar from './LandingNavbar';
import config from '../config'

class Signup extends Component {
    constructor(){
        super()
        this.state ={
            username:'',
            password:'',
            email:'',
            country:'',
            signedUp: false
        }
    }
    changeStateUsername =(event)=>{
        this.setState({username: event.target.value}) 
        
    }
    changeStatePassword =(event)=>{
        this.setState({password: event.target.value})    
        
    }
    changeStateEmail =(event)=>{
        this.setState({email: event.target.value})    
       
    }
    changeStateCountry=(event)=>{
        this.setState({country: event.target.value})   
        
    }
    sendToServer =() =>{
        
        axios(`${config.baseURL}signup`,{
            method:'POST',
            data:{
                username:this.state.username,
                password:this.state.password,
                email:this.state.email,
                country:this.state.country,
            }
        })
        .then((result)=> {
            // this.props.setSignedUp(true)
            console.log(result)
            this.setState({signedUp: true})
        })
        .catch((err)=> console.log(err))   
    }
    render() { 

        if(!this.state.signedUp) {
            return ( 
                <div>
                    <LandingNavbar />
                    <div className="form-wrapper">
                        <h1>Sign Up</h1>
                        <form>   
                            <div className="form-item">
                                <input type ='text' placeholder="username" name ='username' onChange ={this.changeStateUsername} />
                            </div>
                            <div className="form-item">
                                <input type ='text' placeholder="password" name ='password' onChange = {this.changeStatePassword} />
                            </div>
                            <div className="form-item">
                                <input type ='text' placeholder="email" name ='email' onChange = {this.changeStateEmail} />
                            </div>
                            <div className="form-item">
                                <input type ='text' placeholder="country" name ='country' onChange = {this.changeStateCountry} />
                            </div>
                            <div className="button-panel">
                                <input type="button" className="button" value="Submit" onClick={this.sendToServer}/>
                            </div>
                            
                        </form>    
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to="/login" />
            )
        }
    }
}
 
export default Signup;
import React,{ Component } from 'react'
import axios from 'axios'
import LandingNavbar from './LandingNavbar';
import config from '../config'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            password:'',
        }
    }
    changeStateUsername =(event)=>{
        this.setState({username: event.target.value})    
    }
    changeStatePassword =(event)=>{
        this.setState({password: event.target.value})
    }
    sendToServer = () =>{
        debugger
        axios(`${config.baseURL}login`,{
            method:'POST',
            data:{
                username:this.state.username,
                password:this.state.password,
            }
        })
        .then((result)=> {
           debugger
            this.props.setLoggedIn(true)
            console.log('result sendToServer', result)
        })
        .catch((err)=> console.log(err))
    }
    render(){
        return(
            <div>
                <LandingNavbar />
                <div className="form-wrapper">
                    <h1>Log In</h1>
                <form>
                    <div className="form-item">
                        <input type ='text' placeholder="username" name ='username' onChange ={this.changeStateUsername} />
                    </div>
                    <div className="form-item">
                        <input type ='text' placeholder="password" name ='password' onChange = {this.changeStatePassword} />
                    </div>
                    <div className="button-panel">
                        <input type="button" className="button" value="Submit" onClick ={this.sendToServer} />
                    </div>    
                </form>    
                </div>
            </div>
        )
    } 

}
 
export default Login;
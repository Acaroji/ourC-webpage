import React, {Component} from 'react'
import Messages from './Messages';
import axios from 'axios';
import NavBar from './NavBar';
import config from '../config'

class Home extends Component{
    state = {
        characters : [],
        messages:[]
       
    }
    componentDidMount(){
        axios.get(`${config.baseURL}messages/get`).then(result=>{
            debugger
            this.setState({messages:result.data})
        })
    }
    

    
    render(){
        const { characters } = this.state;
        let allMessages = this.state.messages.map(oneMessage =>{
            return(
                <div className="messages-display">
                    <p>From: {oneMessage.from}</p>
                    <p>Messages: {oneMessage.message}</p>
               </div>
            )
        })
  
        return(
            <div>
                <NavBar />
                <div className="welcome-msg">
                    <h2>Welcome, you have this Messages:</h2>
                </div>
                {allMessages}
                
            </div>
        )
    }
}

export default Home;
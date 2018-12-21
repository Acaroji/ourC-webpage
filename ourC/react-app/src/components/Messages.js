import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios'
import config from '../config'

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            message: '',
            messages:[]
        };
    }
    
    // We need 2 functions. 
    // - One that allows us to handle the changes on the input fields
    handleChange = event => {
        console.log(event.target.name)
        const { name, value } = event.target;

        this.setState({
            [name] : value
        })
    }

    //remove messages
    handleClick = event =>{

    }

    // - One that allows us to submit the data on the input fields
    submitMessages = (event) => {
        event.preventDefault();
   
       let currentMessages = this.state.messages
       let newMessage = {
           from:this.state.from,
           message:this.state.message
       }
        console.log(config)
       
       axios(`${config.baseURL}messages/add`,{
        method:'POST',
        data:newMessage,
        withCredentials:true
    })
    .then((result)=> {
       
        console.log(result)
    })
    .catch((err)=> {
        
        console.log(err)})
    currentMessages.push(newMessage)
       this.setState({messages:currentMessages, message:"", from:""}, ()=>{
           console.log(this.state) 
       })
    }

    render() { 
        const { from, message } = this.state;
        let allMessages = this.state.messages.map(oneMessage =>{
            return(
                <div>
                    <p>From: {oneMessage.from}</p>
                    <p>Messages: {oneMessage.message}</p>
               </div>
            )
        })
        return ( 
            
           <div> 
               <NavBar />
               <div id="form-main"> 
                    <p className="container-msg">Write a message</p>     
                    <div id="form-div">       
                    <form className="form" id="form1" onSubmit={this.submitMessages}>
                        <label>From</label>
                        <input className ="feedback-input" id="name" type="text" name="from" value={this.state.from} onChange={this.handleChange} />
                        <div className="text">
                            <label for="comment">Message</label>
                            <input className="feedback-input" id="comment" type="text" name="message" value={this.state.message} onChange={this.handleChange} />
                        </div>
                        <div className="submit-msg">
                            <input type="submit" value="SEND" id="button-blue"/>
                            <div className="ease"></div>

                        </div>
                    </form>
                    </div> 
                </div>
                
            </div> 
         );
    }
}
 
export default Messages;


import  React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios'
import config from '../config'

class Memories extends Component{
    constructor(props){
      super(props);
      this.state = {
        remember:'',
        photo:'',
        memories:[]
      };
    }
    componentDidMount(){
      axios.get(`${config.baseURL}memories`).then(result=>{
          debugger
          this.setState({memories:result.data})
      })
  }
  


  handleChange = event => {
    console.log(event.target.name)
    const {name, value} = event.target;

    this.setState({
      [name]:value
    })
  }
  
  submitMemories =(event)=>{
    event.preventDefault();

    let currentMemories = this.state.memories
    let newMemory = {
      remember:this.state.remember,
      photo:this.state.photo,
    }
    debugger
    axios(`${config.baseURL}memories`, {
     method:'POST',
     data:newMemory
    })
    .then((result) =>{
       console.log(result)
       debugger
      })
    .catch((err)=>{console.log(err)
    debugger
    })
    currentMemories.push(newMemory)
      this.setState({memories:currentMemories, remember:"", photo:""}, ()=>{
        console.log(this.state)
      })
  }
  render() {
    const { photo, remember } =this.state;
    let allMemories = this.state.memories.map(oneMemory =>{
      // debugger
      return(
        <div  className ="memories-display">
          <p>Memory:{oneMemory.remember}</p>
          <p>Photo:{oneMemory.photo}</p>
        </div>
      )
    })
    return(
      <div>
        <NavBar />
        {allMemories}
        <div id="form-main">
          <p className="container-mm">Do you remember when...?</p>
          <div id="form-div">
          <form className="form" id="form1" onSubmit={this.submitMemories}>
            <label>Memory</label>
            <input className ="feedback-input" type="text" name="remember" value={this.state.remember} onChange={this.handleChange} />
            <div className="text">
              <label for="comment">Photo</label>
              <input className="feedback-input" id="comment" type="text" name="photo" value={this.state.photo}  onChange={this.handleChange} />
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
export default Memories;



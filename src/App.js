import React, { Component } from 'react';
import './App.css';
import './index.css';
import $ from 'jquery';
import MovieDisplay from './MovieDisplay.js';



class App extends Component 
{
  constructor()
  {
    super();
    this.state={"name1":"","moviearray":[],"boolean":false};
    this.handleChange=this.handleChange.bind(this);
    this.getmovieValue=this.getmovieValue.bind(this);
  }

  handleChange(e)
  {
    this.setState({name1: e.target.value});
  }
  getmovieValue(moviename) 
  {
    let Input  = "";
    if(moviename=="")
    {
      Input = "Lagaan"
    }
    else
    {
   Input = moviename;
}
        let pathapi = 'http://www.omdbapi.com/?s='+ Input;
    this.setState({boolean: true});
    $.ajax({
    
    url: pathapi,
    type: "GET",
    crossDomain: true,
    dataType: 'JSON',

    success : function(msg){
    this.setState({moviearray:msg.Search});
  
    }.bind(this),
    error: function(err){
    console.log("Main-Error Fetching ");
    }
    });
  }
  



  render() {
    return (
      <div className="App">
            <input id="search" type="text" value={this.state.name1} onChange={this.handleChange} placeholder="Search Your movie"/>
            <button type="submit"  id="btn" onClick={() => {this.getmovieValue(this.state.name1)}}>Search</button>
            <MovieDisplay moviearray={this.state.moviearray} boolean={this.state.boolean} />

        </div>
    );
  }
}

export default App;
 
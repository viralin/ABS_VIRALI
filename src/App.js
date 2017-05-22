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
    /*Declaring the variables with the empty input.*/
    this.state={"name1":"","moviearray":[],"boolean":false};
    this.handleChange=this.handleChange.bind(this);
    this.getmovieValue=this.getmovieValue.bind(this);
  }

  /*Creating a function for setting the new state when changes are made in the input*/
  handleChange(e)
  {
    this.setState({name1: e.target.value});
  }
  /*Creating a function with the AJAX call to the api*/
  getmovieValue(moviename) 
  {
    /*Checking the input value for null condition. If so then default Lagaan movie will display when clicked on the Search button */
    let Input  = "";
    if(moviename=="")
    {
      Input = "Lagaan"
    }
    /*Otherwise movie entered in the input will display when clicked on the Search button */
   else
    {
   Input = moviename;
}
    /*Setting the api provided with the appropriate input value*/
        let pathapi = 'http://www.omdbapi.com/?s='+ Input;
        this.setState({boolean: true});
    /*Calling the api using a AJAX call specifying the input which on success will return the data in the form of objects and if there is any error it will hit the error msg .*/
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
  


/*Calling the render method for displaying the data in the browser containing JSX.*/
  render() {
    return (
      <div className="App">
            {/*Creating a search bar and a button which handles clicking event and accordingly calls the function making the AJAX call to the api*/}
            <input id="search" type="text" value={this.state.name1} onChange={this.handleChange} placeholder="Search Your movie"/>
            <button type="submit"  id="btn" onClick={() => {this.getmovieValue(this.state.name1)}}>Search</button>

            {/*Calling the next component where the data retrived is mapped appropriately.*/}
            <MovieDisplay moviearray={this.state.moviearray} boolean={this.state.boolean} />

        </div>
    );
  }
}

export default App;
 
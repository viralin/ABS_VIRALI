import React, { Component } from 'react';




class MovieDisplay extends Component 
{
  render() 
  {
  	/*Storing the data retrieved from the api along with the mapping in the variable data(ES6 context) */
  	const  data= this.props.moviearray.map(function(value) {

				

			return(
				/*Storing the unique ID as key for proper retrieval*/

				<ol key={value.imdbID} className="item">

				/*Displaying the movie list in the form of a jumbotron using a jumbotron class*/

				 <section className="container" id="container">
								               <section className="jumbotron" style={{"margin-top": "10%"}}>
								                   
								                   <img src={value.Poster} alt="" style={{"width": "350px", "height":"200","float":"left"}}/>
								                   <h4><b><i>Title:-</i></b>{value.Title}</h4>
								                   <h4><b><i>Year:-</i></b>{value.Year}</h4>
								                   
								                  
								               </section>
				</section>

                   

					

				</ol>
					
				);
		}.bind(this));

/*Returning the data mapped*/
    return (
   
      
      <div>
      { //Check if message failed
        (this.props.boolean == true)
          ? <div>  
           {data}
		     </div> 
          : <div></div> 
      } 
      </div>
    );
  }
}

/*Exporting the component so that it can be used in the another files.*/
export default MovieDisplay;

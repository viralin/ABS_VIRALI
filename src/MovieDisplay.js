import React, { Component } from 'react';




class MovieDisplay extends Component 
{
  render() 
  {
  	const mapping = this.props.moviearray.map(function(value) {

				

			return(

				<ol key={value.imdbID} className="item">
				
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

    return (
   
      
      <div>
      { //Check if message failed
        (this.props.boolean == true)
          ? <div>  
           {mapping}
		     </div> 
          : <div></div> 
      } 
      </div>
    );
  }
}


export default MovieDisplay;

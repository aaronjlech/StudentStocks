import React from 'react';
import { Link } from 'react-router';




const Home = React.createClass({

   _renderNav(){
      return(
         <div className="top-bar">
            <div className="top-bar-left">
               <ul className="dropdown menu" data-dropdown-menu>
                  <li className="menu-text">Site Title</li>

                  <li><a href="#">Two</a></li>
                  <li><a href="#">Three</a></li>
               </ul>
            </div>
            <div className="top-bar-right">
               <ul className="menu">
                  <Link to={`/here`}>
                     <li><button type="button" className="button">Search</button></li>
                  </Link>
               </ul>
            </div>
         </div>
      )
   },

   render(){

      return(
         <div id="home">
            {this._renderNav()}
         </div>
      )
   }
})

export default Home;

import React from "react";



const Login = React.createClass({
   _handleSubmit(e){
      e.preventDefault();

   },


   render(){
      return(
         <form onSubmit={this._handleSubmit} >
  <div className="row medium-6 offset-2 columns form form_login">
    <div className="medium-12 columns">
      <label>User Name
        <input type="text" placeholder="user name"/>
      </label>
    </div>
    <div className="medium-12 columns">
      <label>Password
        <input type="password" placeholder="password" ref="password"/>
      </label>
    </div>
  </div>
</form>

      )
   }
})

export default Login;

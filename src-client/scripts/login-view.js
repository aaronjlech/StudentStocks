const React = require('react')
const ACTIONS = require('./actions.js')



const LoginView = React.createClass({





   _handleSubmit: function(evt){
      evt.preventDefault()
      console.log(this.refs.userField.value)
      console.log(this.refs.passField.value)
      let loginInfo = {
         username: this.refs.userField.value,
         password: this.refs.passField.value
      }

      ACTIONS.handleUserLogin(loginInfo)



   },



   render: function(){

      return(
         <form action="">
            <p>Username</p>
            <input className="input-group" type="text" className="username" ref="userField"/>
            <p>Password</p>
            <input className="input-group" type="password" className="password" ref="passField"/>
            <button onClick={this._handleSubmit} className="btn btn-primary">Login</button>
         </form>
      )
   }
})




module.exports = {LoginView}
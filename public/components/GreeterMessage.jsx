var React = require('react');
    
var GreeterMessage = React.createClass({
   render: function (){
       var name = this.props.name;
       var message = this.props.message;
       
       return (
           <div id="message">
               <h2>Hello {name}!</h2>
               <p>Your message: <span>{message}</span></p>
           </div>
       );
   } 
});

module.exports = GreeterMessage;
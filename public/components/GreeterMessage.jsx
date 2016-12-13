var React = require('react');
    
var GreeterMessage = React.createClass({
   render: function (){
       var name = this.props.name;
       var message = this.props.message;
       
       return (
           <div>
               <h3>Hello {name}!</h3>
               <p>Your message: <span>{message}</span></p>
           </div>
       );
   } 
});

module.exports = GreeterMessage;
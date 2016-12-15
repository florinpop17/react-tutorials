var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var myName = "Florin";

ReactDOM.render(<Greeter name={myName} />, document.getElementById("react-container"));
var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('../components/Greeter');
var GreeterMessage = require('../components/GreeterMessage');
var GreeterForm = require('../components/GreeterForm');


var myName = "Florin";

ReactDOM.render(<Greeter name={myName} />, document.getElementById("react-container"));
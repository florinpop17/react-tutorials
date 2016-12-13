var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('../components/GreeterMessage');
var GreeterForm = require('../components/GreeterForm');

var Greeter = React.createClass({
    render : function () {
        return (
            <div>
                <GreeterMessage />
                <GreeterForm />
            </div>
        );
    }
});

ReactDOM.render(<Greeter />, document.getElementById("react-container"));
var React = require('react');
var ReactDOM = require('react-dom');
var GreeterMessage = require('../components/GreeterMessage');

var Container = React.createClass({
    render : function () {
        return (
            <div>
                <p>Simple react component</p>
            </div>
        );
    }
});

ReactDOM.render(<Container />, document.getElementById("react-container"));
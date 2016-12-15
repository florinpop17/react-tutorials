var React = require('react');

var GreeterForm = React.createClass({
    changeInput: function (){
        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        
        updates = {name, message};
        
        this.props.onNewData(updates);
        
    },
    render: function() {
        return (
            <form>
                <div>
                    <label>Name:</label><br />
                    <input onChange={this.changeInput} type="text" ref="name" placeholder="Enter name"/>
                </div>
                <div>
                    <label>Message:</label><br />
                    <textarea onChange={this.changeInput} ref="message" placeholder="Enter message"></textarea>
                </div>
            </form>
        );
    }
});

module.exports = GreeterForm;
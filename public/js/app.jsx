var MyComponent = React.createClass({
    render : function () {
        return (
            <div>
                <p>Simple react component</p>
            </div>
        );
    }
});

ReactDOM.render(<MyComponent />, document.getElementById("react-container"));
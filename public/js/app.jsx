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
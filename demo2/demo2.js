class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div", 
            null, //this means there's no attribute inside the div i.e class or id
            "Hello ",
            this.props.name
        );
    }
}

ReactDOM.render(React.createElement(HelloMessage,
    { name: "Westcliff"}),
    document.getElementById('hello-example'));
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds+1
    }))
    
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      'div',
      null,
      'Seconds: ',
      this.state.seconds
    );
  }
}

ReactDOM.render(React.createElement(Timer, null), document.getElementById('timer-example'));


// methods are written after the constructor
// we have three methods and all of them seat between the constructor and render()
// render will always have a retun

//this.setState modifies the current state, which represent the name of the variable
//state.seconds+1 means that every one second it will add '1' to the value of the property
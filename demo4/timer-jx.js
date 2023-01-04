class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
}
  
  ReactDOM.render(
    <Timer />,
    document.getElementById('timer-example')
  );

  // <Timer /> is self-closing because there is nothing in between the tags. so the only time we use open and closing tags is when you put something in-between
  // you must always close a self-closing tag which is also called an empty tag
  // this is the sane thing as timer.js but we're not using createElemeny
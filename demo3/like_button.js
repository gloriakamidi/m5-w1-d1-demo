'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = { liked: false };
  }
// all the data is under state, here our boolean i/e true ot false , is our data
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
//if this is true return the message otherwise do nothing
    return e(
      'button', //cad button element donc <button></button>
      { onClick: () => this.setState ({ liked: true })},
      'Like' //this is the name of the button
    );
  }
}
//N.B.: return is only reserved to output stuff 

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
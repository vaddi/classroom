import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import { Flickr } from './components/Flickr';

class App extends React.Component {
  
  // getInitialState :: {error: ""}
  getInitialState() { return {error: ""} }
  
  //
  showError(s) {this.setState({error: s})}

  render() {
    return (
      <div>
        <Flickr />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


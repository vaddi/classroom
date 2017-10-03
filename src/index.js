import React from 'react';
import ReactDOM from 'react-dom';
import { Flickr } from './components/Flickr';
import { Collage } from './components/Collage';

import './styles.css';

class App extends React.Component {
  
  // constructror :: props -> props, state {error: ""}, Binds -> Binds
  constructor(props) {
    super(props);
    this.state = { error: "" };
    this.showError = this.showError.bind(this);
  }

  // showError :: String -> State Error
  showError(s) {this.setState({error: s})}

  render() {
    return (
      <div>
        <Flickr showError={this.showError} />
        <Collage showError={this.showError} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


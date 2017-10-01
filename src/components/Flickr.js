import React from 'react';
import { flickrSearch } from './model';

export class Flickr extends React.Component {

  // getInitialState :: { term :: String }
  getInitialState() { return {term: ""} }
  
  // termChanged :: Event -> State Term
  termChanged({currentTarget: t}) { this.setState({term: t.value}) } 
  
  // serchedClicked :: Event -> ?
  searchClicked(_) { flickrSearch(this.state.term).fork(this.props.showError, (x) => console.log(x) ) }

  render() {
    return (
      <div id="flickr">
        <input onChange={this.termChanged} />
        <button onClick={this.searchClicked}>Search</button>
        <div id="results"></div>
      </div>
    );
  }
}

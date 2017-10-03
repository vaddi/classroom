import React from 'react';
import { flickrSearch } from './model';

export class Flickr extends React.Component {
  
  // constructor :: props -> props, state -> { term :: String, results: [Url] }, Binds -> Binds
  constructor(props) {
    super(props);
    this.state = { 
      term: "", 
      results: [] 
    }; 
    this.termChanged = this.termChanged.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  // termChanged :: Event -> State Term
  termChanged({currentTarget: t}) { this.setState({term: t.value}) } 
  
  // updateResults :: Event -> State Results
  updateResults(xs) { this.setState({results: xs}) } 
  
  
  // serchedClicked :: Event -> ?
  searchClicked(_) { flickrSearch(this.state.term).fork(this.props.showError, this.updateResults ) }

  render() {
    const imgs = this.state.results.map(src => <img src={src} key={src} alt={src} />)
    return (
      <div id="flickr">
        <input onChange={this.termChanged} />
        <button onClick={this.searchClicked}>Search</button>
        <div id="results">{imgs}</div>
      </div>
    );
  }
}

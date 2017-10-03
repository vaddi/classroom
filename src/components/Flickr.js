import React from 'react';
import { flickrSearch } from './model';
import { DragImage } from './drag_image';

export class Flickr extends React.Component {
  
  // constructor :: props -> props, state -> { term :: String, results: [Photos] }, Binds -> Binds
  constructor(props) {
    super(props);
    this.state = { 
      term: "", 
      results: [] 
    }; 
    this.termChanged = this.termChanged.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
  }

  // termChanged :: Event -> State Term
  termChanged(e) { this.setState({term: e.currentTarget.value}) } 
  
  // updateResults :: Event -> State Results
  updateResults(xs) { this.setState({results: xs}) } 
  
  // serchedClicked :: Event -> State Result
  searchClicked(e) { flickrSearch(this.state.term).fork(this.props.showError, this.updateResults ) }
  

  // onDragStart :: Event -> State Event
  onDragStart({dataTransfer: dt, currentTarget: t}) { dt.setData('text', t.src) }
  
  render() {
    const imgs = this.state.results.map(p => <DragImage src={p.src} />)
    return (
      <div id="flickr">
        <div className="flickrSearch">
          <input onChange={this.termChanged} />
          <button onClick={this.searchClicked}>Search</button>
        </div>
        <div className="results">{imgs}</div>
      </div>
    );
  }
}

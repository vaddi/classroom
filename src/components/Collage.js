import React from 'react';
import { Photo, replacePhoto } from './model';
import { DragImage } from './drag_image';
const { preventDefault } = require('./utils');

export class Collage extends React.Component {
  
  // constructor :: props -> props, state -> { photos: [Url] }, Binds -> Binds
  constructor(props) {
    super(props);
    this.state = { 
      term: "", 
      photos: [] 
    }; 
    this.updatePhotos = this.updatePhotos.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  // updateResults :: Event -> State Photos
  updatePhotos(xs) { this.setState({photos: xs}) } 
  
  // onDrop :: Event -> State Photos
  onDrop({dataTransfer: dt, clientX: x, clientY: y, currentTarget: t}) {
    const offset = t.getBoundingClientRect().top
    const src = dt.getData('text')
    const photo = Photo(src, x, y - offset)
    this.updatePhotos(replacePhoto(photo, this.state.photos))
  }

  render() {
    // See Advanced -> Isomorphism (style is here one) 
    const imgs = this.state.photos.map(p => <DragImage src={p.src} style={{top: p.y, left: p.x}} />)
    return (
      <div id="collage" onDrop={this.onDrop} onDragOver={preventDefault}>
        <div className="photos">{imgs}</div>
      </div>
    );
  }
}

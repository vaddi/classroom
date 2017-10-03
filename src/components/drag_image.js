import React from 'react';

export class DragImage extends React.Component {
  
  // constructor :: props -> props, state -> { term :: String, results: [Photos] }, Binds -> Binds
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
  }

  // onDragStart :: Event -> State Event
  onDragStart({dataTransfer: dt, currentTarget: t}) { dt.setData('text', t.src) }
  
  render() {
    const p = undefined;
    return <img src={p.src} key={p.src} alt={p.src} draggable={true} onDragStart={this.onDragStart} {...this.props} />
  }
}

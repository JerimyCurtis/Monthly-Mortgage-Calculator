import React, { Component } from 'react';

class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      pos: { x: 0, y: 0 },
      rel: null // Relative position
    };

    // Binding this to event handlers
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onMouseDown(e) {
    if (e.button !== 0) return; // Only left mouse button
    this.setState({
      isDragging: true,
      rel: {
        x: e.pageX - this.state.pos.x,
        y: e.pageY - this.state.pos.y
      }
    });
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseMove(e) {
    if (!this.state.isDragging) return;
    this.setState({
      pos: {
        x: e.pageX - this.state.rel.x,
        y: e.pageY - this.state.rel.y
      }
    });
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseUp(e) {
    this.setState({ isDragging: false });
    e.stopPropagation();
    e.preventDefault();
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  render() {
    const { x, y } = this.state.pos;
    return (
      <div
        style={{ position: 'absolute', left: x + 'px', top: y + 'px', cursor: 'move' }}
        onMouseDown={this.onMouseDown}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;

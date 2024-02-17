import React, { Component } from 'react';

class Draggable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dragging: false,
        offset: { x: 0, y: 0 },
      };
      this.startDrag = this.startDrag.bind(this);
      this.onDrag = this.onDrag.bind(this);
      this.stopDrag = this.stopDrag.bind(this);
    }
  
    startDrag(e) {
      if (!e.target.classList.contains('drag-handle')) return;
      
      this.setState({
        dragging: true,
        offset: {
          x: e.clientX,
          y: e.clientY,
        },
      });
      
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
      e.preventDefault();
    }
  
    onDrag(e) {
      if (!this.state.dragging) return;
  
      const dx = e.clientX - this.state.offset.x;
      const dy = e.clientY - this.state.offset.y;
  
      if (this.node) {
        this.node.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    }
  
    stopDrag() {
      this.setState({ dragging: false });
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
    }
  
    render() {
      return (
        <div
          ref={node => { this.node = node; }}
          onMouseDown={this.startDrag}
          style={{ cursor: 'move' }}
        >
          {this.props.children}
        </div>
      );
    }
  }
  export default Draggable;
  
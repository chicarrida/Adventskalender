import React from 'react';

class Flipper extends React.Component{
  state={
    flipped: false,
  }

  flip= ()=> {
    this.setState({ flipped: !this.state.flipped });
  }

  render() {
    return <div className={"flipper-container " + this.props.orientation} onClick={this.flip}>
      <div className={"flipper" + (this.state.flipped ? " flipped" : "")}>
        <Front>{this.props.date}</Front>
        <Back>{this.props.content}</Back>
      </div>
    </div>;
  }
}

class Front extends React.Component{
  render() {
    return <div className="front tile">{this.props.children}</div>;
  }
}

class Back extends React.Component{
  render() {
    return <div className="back tile">{this.props.children}</div>;
  }
}


export default Flipper;

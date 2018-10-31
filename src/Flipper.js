import React from 'react';
/*
from https://www.codementor.io/chrisharrington/building-a-flipper-using-react-js-and-less-css-du107v563
*/
class Flipper extends React.Component{
  state={
    flipped: false,
  }

  flip= ()=> {
      this.setState({ flipped: !this.state.flipped });
  }

  render() {
    let style = "flipper-container " + this.props.orientation;
    if(Math.ceil(Math.random()*10)%3 === 0)
      style = "flipper-container custom-margin " + this.props.orientation;
    return <div className={style} onClick={this.flip}>
      <div className={"flipper" + (this.state.flipped ? " flipped" : "")}>
        <Front>{this.props.data}</Front>
        <Back>{this.props.data}</Back>
      </div>
    </div>;
  }
}

class Front extends React.Component{

  render() {
    return <div className="front tile" style={{backgroundImage: "url(" + this.props.children.image + ")"}}>
      <p className="front-number">
      {this.props.children.date}
      </p>
    </div>;
  }
}

class Back extends React.Component{
  render() {
    return <div className="back tile">{this.props.children.content}</div>;
  }
}

export default Flipper;

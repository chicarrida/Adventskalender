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
    let style = "flipper-container margin-15 " + this.props.orientation;
    let random = this.props.data.date%5 ;
    if(random === 0 || random === 2)
      style = "flipper-container margin-45 " + this.props.orientation;
    else if(random === 1 || random === 3)
      style = "flipper-container margin-55 " + this.props.orientation;

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
    let {content, link} = this.props.children;
    if(link)
      return <div className="back tile">{content}<a href={link}> ... </a></div>;
    return <div className="back tile">{content}</div>;
  }
}

export default Flipper;

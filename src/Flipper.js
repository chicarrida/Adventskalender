import React from 'react';
/*
from https://www.codementor.io/chrisharrington/building-a-flipper-using-react-js-and-less-css-du107v563
*/
class Flipper extends React.Component{
  state={
    flipped: false,
    open: false
  }

  flip = (event) => {
      this.setState({ flipped: !this.state.flipped });
  }

  openModal = () => {
    this.setState({open: true});

  }

  closeModal = () => {
    this.setState({open: false});
  }

  render() {
    let style = "flipper-container margin-15 ";
    if(this.props.active){
      style = style + "horizontal";
    }
    let modalStyle ="modal "+(this.state.open ? "vis" : "")
    let {data} = this.props
    let {link, image, date} = data
    return(
    [<div className={style} onMouseEnter={this.flip} onMouseLeave={this.flip} onClick={this.props.active? this.openModal: null}  key={date}>
      <div className={"flipper" + ((this.state.flipped || this.state.open) ? " flipped" : "")}>
        <Front>{data}</Front>
        <Back>{data}</Back>
      </div>
    </div>,
    <div id="myModal" className={modalStyle} key={date+"mdl"}>
      <div className="modal-content" style={{backgroundImage: "url(/img/" + image + "_800x800.jpg)"}}>
        <span className="close" onClick={this.closeModal}>&times;</span>
        <div className="modal-text">
          <p>{data.content}</p>
          <a onClick={event => event.stopPropagation()} href={link} target='_blank'> {link} </a>
        </div>
      </div>
    </div>
])
  }
}

class Front extends React.Component{

  render() {
    let {image} = this.props.children;
    return <div className="front tile" style={{backgroundImage: "url(/img/" + image + ".jpg)"}}>
    </div>;
  }
}

class Back extends React.Component{
  render() {
    let {teaser,image} = this.props.children;
    return <div className="back tile" style={{backgroundImage: "url(/img/small_transparent/" + image + ".jpg)"}}><div style={{backgroundColor:"rgba(255,255,255,0.85)", width:"inherit", height:"inherit"}}>{teaser}</div></div>;
  }
}

export default Flipper;

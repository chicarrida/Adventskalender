import React from 'react';

// React component for the front side of the card
class CardFront extends React.Component {
  render() {
    return(
      <div className={'card-side side-front '+(this.props.visible ? 'hide-front' : '')}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-6 side-front-content'>
            <h1> {this.props.date}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
//<div className={(this.props.visible ? 'card-side' : 'hide-side')+' side-back'}>
// React component for the back side of the card
class CardBack extends React.Component {
  render() {

    return(
      <div className={(this.props.visible ? 'card-side' : 'hide-side')+' side-back'}>
        <div className='container-fluid'>
          <div className='col-xs-6 side-back-content'>
            <h1>{this.props.content}</h1>
          </div>
        </div>
      </div>
    )
  }
}

// React component for the card (main component)
class ActiveCard extends React.Component {
  state={
    click: false
  }

  toggle = () => {
    this.setState({click: !this.state.click});
  }

  render() {
    return(
      <div className={'card-container '+ (this.state.click ?'selected' : '')} onClick={this.toggle}>
        <div className='card-body'>
          <CardBack content={this.props.content} visible={this.state.click}/>
          <CardFront date={this.props.date} visible={this.state.click}/>
        </div>
      </div>
    )
  }
}

class InActiveCard extends React.Component {
  render() {
    return(
      <div className='inactivecard-container'>
        <div className='card-body'>
          <h1 className='side-front-content'>
              {this.props.date}
          </h1>
        </div>
      </div>
    )
  }
}

export  {ActiveCard, InActiveCard};

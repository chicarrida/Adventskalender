import React, { Component } from 'react';
import Flipper from "./Flipper";


var data = require("./input.json");

class App extends Component {
  state = {selected: false}



  render() {
    let cards = [];
    //check for months
    let date = new Date();
    if(date.getMonth() !== data.month){
      //TODO: hübsch machen!!
      return(
      <div>
        <h1>
          Schon vorbei....
        </h1>
      </div>
      )
    }

    Object.keys(data.input).map((key,index) => {
      let o = data.input[index];
      o.active = false
      if(o.date <= date.getDate()) o.active = true
      cards.push(o);
    });

    let content = Object.keys(cards).map((key,index) => {
        if(cards[key].active){
          return <Flipper data={cards[key]} orientation="horizontal"  key={index}/>
        }
        else
          return <Flipper data={cards[key]} key={index}/>
        });

    return (
      <div className='grid'>
        {content}
      </div>
    );
  }
}

export default App;

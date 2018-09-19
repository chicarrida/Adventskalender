import React, { Component } from 'react';
import './App.css';
import {ActiveCard, InActiveCard} from "./card";
var data = require("./input.json");
var _ = require('lodash');

class App extends Component {
  render() {
    let cards = [];
    //check for months
    let date = new Date();
    if(date.getMonth() !== data.month){
      return(
      <div>
        <h1>
          Schon vorbei....
        </h1>
      </div>
      )
    }

    Object.keys(data.input).map((key,index) => {
      let o = {date: index+1, content: data.input[index], active: false}
      if(index+1 <= date.getDate()){
        o.active = true
      }
        cards.push(o);
    });
    let s = _.shuffle(cards);

    let content = Object.keys(s).map((key,index) => {
        if(s[key].active){
          return <ActiveCard date={s[key].date} content={s[key].content} key={index}/>
        }
        else
          return <InActiveCard  date={s[key].date} key={index}/>
        });

    return (
      <div className='grid'>
        {content}
      </div>
    );
  }
}

export default App;

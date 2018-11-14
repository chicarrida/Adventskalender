import React, { Component } from 'react';
import Flipper from "./Flipper";
import Particles from 'react-particles-js';


var data = require("./input.json");

class App extends Component {
  state = {animation: true}

toggleAnimation = () =>{
  this.setState({animation : !this.state.animation});
}

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
      let o = data.input[index];
      o.active = false
      if(o.date <= date.getDate()) o.active = true
      cards.push(o);
    });

    let content = Object.keys(cards).map((key,index) => {
        if(cards[key].active){
          return <Flipper data={cards[key]} active={true}  key={index}/>
        }
        else
          return <Flipper data={cards[key]} key={index}/>
        });

    return (
      <div className='grid'>
      {this.state.animation ? <Particles className='particles'
               params={{
                 "particles": {
                   "number": {
                     "value": 460,
                     "density": {
                       "enable": true,
                       "value_area": 800
                     }
                   },
                   "color": {
                     "value": "#cae7ed"
                   },
                   "shape": {
                     "type": "star",
                     "stroke": {
                       "width": 0,
                       "color": "#000000"
                     },
                     "polygon": {
                       "nb_sides": 7
                     },
                     "image": {
                       "src": "img/github.svg",
                       "width": 100,
                       "height": 100
                     }
                   },
                   "opacity": {
                     "value": 0.5,
                     "random": true,
                     "anim": {
                       "enable": false,
                       "speed": 1,
                       "opacity_min": 0.1,
                       "sync": false
                     }
                   },
                   "size": {
                     "value": 3,
                     "random": true,
                     "anim": {
                       "enable": false,
                       "speed": 40,
                       "size_min": 0.1,
                       "sync": false
                     }
                   },
                   "line_linked": {
                     "enable": false,
                     "distance": 500,
                     "color": "#ffffff",
                     "opacity": 0.4,
                     "width": 2
                   },
                   "move": {
                     "enable": true,
                     "speed": 2,
                     "direction": "bottom",
                     "random": true,
                     "straight": false,
                     "out_mode": "out",
                     "bounce": false,
                     "attract": {
                       "enable": false,
                       "rotateX": 600,
                       "rotateY": 1200
                     }
                   }
                  },
                  "interactivity": {
                   "detect_on": "canvas",
                   "events": {
                     "onhover": {
                       "enable": false,
                       "mode": "bubble"
                     },
                     "onclick": {
                       "enable": false,
                       "mode": "repulse"
                     },
                     "resize": true
                   },
                   "modes": {
                     "grab": {
                       "distance": 400,
                       "line_linked": {
                         "opacity": 0.5
                       }
                     },
                     "bubble": {
                       "distance": 400,
                       "size": 4,
                       "duration": 0.3,
                       "opacity": 1,
                       "speed": 3
                     },
                     "repulse": {
                       "distance": 200,
                       "duration": 0.4
                     },
                     "push": {
                       "particles_nb": 4
                     },
                     "remove": {
                       "particles_nb": 2
                     }
                   }
                  },
                    "retina_detect": true}}
                     /> : null}
      <div className="title">
        <h2>SUPER TOLLER TITEL MIT 1A STYLING KOMMT HIER HIN</h2>
      </div>
        <div className="calendar">
          {content}
        </div>
        <div className="title">
          <p><h6>| Bilder: Carola | Code: Melanie |  Idee: Stefanie | Texte: Antonia |</h6>
          <button className="button" onClick={this.toggleAnimation}>{this.state.animation ? "Animation Stoppen" : "Animation starten" }</button></p>
        </div>

      </div>
    );
  }
}

export default App;

import React from 'react';
/*
from https://www.codementor.io/chrisharrington/building-a-flipper-using-react-js-and-less-css-du107v563
*/
class Flipper extends React.Component{
  state={
    flipped: false,
    open: false,
    iamges: null
  }

  flip = (event) => {
      this.setState({ flipped: !this.state.flipped });
  }

   getData = (url, data ) => {
    // Default options are marked with *
      return fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
          }).then(res => res.json())
          //.then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error));

    /*fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          //headers: {
          //    "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          //},
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json())
      .catch(error => console.error(error)); // parses response to JSON*/
  }

  test = (color) => {
    this.getData('http://192.168.243.9:3001/graphql', {query:
      `query searchColor($lang: String!, $filters: dsQueryFilters, $q: String) {
      dsSearch(lang: $lang, filters: $filters, q: $q) {
        count
        documents {
          _key
        }
      }
    }
 	`, variables: {
        "lang": "en",
        "q":"ZMB_Mol_",
        "filters": {
          /*"size":{
            "width":500,
            "height": 500
          },*/
          "dominant_colors":  {
           "hexcolor": color,
           "delta_h":	10,
           "delta_l":	15,
           "delta_s":	15,
           "num_colors": 6
          }
        }
    }})
    .then(data => this.handleData(data)) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
  }

  handleData = (data) => {
    if(data.data.dsSearch.count > 0){
      let content = data.data.dsSearch.documents.map(d => {
        let imageUrl = `http://192.168.243.9:3001/version/small/${d._key}/default.webp`
        let mfnUrl = "http://mfn0006.naturkundemuseum-berlin.de:3100/detail/"+d._key
        return <a href={mfnUrl} key={d._key}><img className="image" src={imageUrl} alt={d._key} key={d._key}/></a>
      });
      this.setState({images: content, open: true});
    }else{
      this.setState({images: "Nichts gefunden...", open: true});
    }
  }

  openModal = () => {
    this.setState({open: true});

  }

  closeModal = () => {
    this.setState({open: false, images: null});
  }

  render() {
    let style = "flipper-container margin-15 ";
    if(this.props.active){
      style = style + "horizontal";
    }
    let modalStyle ="modal "+(this.state.open ? "vis" : "")
    let {data} = this.props
    let {color, title} = data
    return(
    [<div className={style} onMouseEnter={this.flip} onMouseLeave={this.flip} onClick={()=> this.test(color)} key={color}>
      <div className={"flipper"}>
        <Front>{data}</Front>
      </div>
    </div>,

    <div id="myModal" className={modalStyle} key={title} >
      <div className="modal-content" style={{"border": "2px solid "+color}}>
        <div className="title">
          <div className="swatch">
            <div className="sample" style={{"backgroundColor": color}}></div>
            <span style={{"margin-top": "25px"}}>{title}</span>
          </div>
          <span className="close" onClick={this.closeModal} style={{"color": color}}>&times;</span>
        </div>
        <div className="modal-text">
          {this.state.images}
        </div>
      </div>
    </div>
])
  }
}

class Front extends React.Component{

  render() {
    let {color, title} = this.props.children;
    return <div className="front tile tooltip" style={{backgroundColor:color}}>
    <span className="tooltiptext">{title}</span>
    </div>;
  }
}

export default Flipper;

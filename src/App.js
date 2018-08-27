import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#FFD333'
};
let fakeServerData = {
  user: {
    name: 'Siimon',
    playlists: [
      {
        name: 'My favorites',
        songs: ['Song1', 'Sang2']
      },
      {
        name: 'd',
        songs: ['tries', 'obvious']
      },
      {},
      {},
    ]
  }
}

class Aggregate extends Component {
  render () {
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists && this.props.playlists.length} Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render () {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }
  componentDidMount () {
    this.setState({serverData: fakeServerData});
  }
  render() {
    return (
      <div className="App">
        <h1 style={{...defaultStyle, 'font-size': '54px'}}>
          {this.state.serverData.user && 
           this.state.serverData.user.name}'s Playlists
        </h1>
        <Aggregate playlists={this.state.serverData.user && 
                              this.state.serverData.user.name}/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;

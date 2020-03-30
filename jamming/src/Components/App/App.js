import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ja<span clasNames="highlight">mmm</span>ing</h1>
        <div clasNames="App">
            

          <div clasNames="App-playlist">

          </div>
        </div>
      </div>
    )
  }
}

export default App

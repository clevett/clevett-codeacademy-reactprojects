import React from 'react'
import './Playlist.css';

//<!-- Add a TrackList component -->
class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist" />

        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist
import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);
    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug
    });
    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      isPlaying: false,
      hover: false,
      currentVolume: 0.8
    };
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }

  formatTime(seconds) {
    if(typeof seconds !== "number") {
      return "-:--";
    }
    else {
      var mins = parseInt(seconds/60);
      var secs = parseInt(seconds % 60);
      if(secs < 10 && secs >= 0) {
        secs = "0"+secs;
      }
      return mins + ":" + secs;
    }
  }

  componentDidMount() {
     this.eventListeners = {
       timeupdate: e => {
         this.setState({ currentTime: this.audioElement.currentTime });
       },
       durationchange: e => {
         this.setState({ duration: this.audioElement.duration });
       }
     };
     this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
   }

   componentWillUnmount() {
     this.audioElement.src = null;
     this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
   }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  hoverOn(song) {
    this.setState({ hover: song });
  }

  hoverOff() {
    this.setState({ hover: null });
  }

  displayIcon(song, i) {
    const isSameSong = this.state.currentSong === song;
    if ((this.state.hover === song && !isSameSong) || (!this.state.isPlaying && isSameSong)) {
      return <span className='ion-md-play'></span>
    } else if (this.state.isPlaying && isSameSong) {
      return <span className='ion-md-pause'></span>
    } else {
      return i + 1;
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(this.state.album.songs.length - 1, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleTimeChange(e) {
     const newTime = this.audioElement.duration * e.target.value;
     this.audioElement.currentTime = newTime;
     this.setState({ currentTime: newTime });
   }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({currentVolume: newVolume})

  }

  render() {
    return (
      <section className="album col-12">
        <section id="album-info row">
			<div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                  <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
              </div>
              <div className="col-2"></div>
			</div>
          <div className="album-details row">
            <h2 id="album-title">{this.state.album.title}</h2>
            <h3 className="artist">{this.state.album.artist}</h3>
            <p id="release-info">{this.state.album.releaseInfo}</p>
          </div>
        </section>
        <table id="song-list row">
          <thead>
			<tr>
            <th id="song-number-column">Song Number</th>
            <th id="song-title-column">Title</th>
            <th id="song-duration-column">Duration (in seconds)</th>
			</tr>
          </thead>
          <tbody>
            {this.state.album.songs.map((song, index) =>
              <tr className="song" key={index} onClick={() => this.handleSongClick(song)} onMouseEnter={() => this.hoverOn(song)}
                onMouseLeave={() => this.hoverOff()}>
                <td className="song-actions">
                  <button>
                    {this.displayIcon(song, index)}
                  </button>
                </td>
                <td className="song-title">{song.title}</td>
                <td className="song-duration">{this.formatTime(parseFloat(song.duration))}</td>
              </tr>
            )}
          </tbody>
        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.formatTime(this.audioElement.currentTime)}
          duration={this.formatTime(this.audioElement.duration)}
          currentVolume={this.state.currentVolume}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={(e) => this.handleTimeChange(e)}
          handleVolumeChange={(e) => this.handleVolumeChange(e)}
        />
      </section>
    );
  }
}
export default Album;

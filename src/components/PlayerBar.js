
import React, { Component } from 'react';

 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar row">
         <section id="buttons" className="row">
			 <div className="col-md-3 col-sm-1"></div>
             <button className="col-md-2 col-sm-4" id="previous" onClick={this.props.handlePrevClick}>
               <ion-icon className="ion-skip-backward"></ion-icon>
             </button>
             <button className="col-md-2 col-sm-4" id="play-pause" onClick={this.props.handleSongClick} >
               <ion-icon name={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></ion-icon>
             </button>
             <button className="col-md-2 col-sm-4" id="next" onClick={this.props.handleNextClick}>
               <ion-icon className="ion-skip-forward"></ion-icon>
             </button>
			 <div className="col-md-3 col-sm-1"></div>
         </section>
         <section id="time-control" className="row">
			<div className="row">
				<p><span className="current-time">{this.props.currentTime}</span> seconds out of <span className="total-time">{this.props.duration}</span></p>
			</div>
			<div className="row">
				<div className="col-2"></div>
               <input
                 type="range"
                 className="seek-bar col-8"
                 value={(this.props.currentTime / this.props.duration) || 0}
                 max="1"
                 min="0"
                 step="0.01"
                 onChange={this.props.handleTimeChange}
               />
				<div className="col-2"></div>
           </div>
         </section>
         <section id="volume-control row">
           <div className="icon ion-volume-low col-2"></div>
           <input
            type="range"
            className="seek-bar col-8"
            value={this.props.currentVolume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange} />
           <div className="icon ion-volume-high col-2"></div>
         </section>
       </section>
     );
   }
 }

 export default PlayerBar;

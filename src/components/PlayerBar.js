
import React, { Component } from 'react';

 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar row">
         <section id="buttons" className="row">
			 <div className="col-md-3 col-sm-1"></div>
             <button className="col-md-2" id="previous" onClick={this.props.handlePrevClick}>
               <i class="fas fa-step-backward"></i>
             </button>
             <button className="col-md-2" id="play-pause" onClick={this.props.handleSongClick} >
               <i class={this.props.isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
             </button>
             <button className="col-md-2" id="next" onClick={this.props.handleNextClick}>
               <i class="fas fa-step-forward"></i>
             </button>
			 <div className="col-md-3 col-sm-1"></div>
         </section>
         <section id="time-control" className="row">
			<div className="row">
				<div className="col-2"><span className="current-time">{this.props.currentTime}</span></div>
               <input
                 type="range"
                 className="seek-bar col-8"
                 value={(this.props.currentTime / this.props.duration) || 0}
                 max="1"
                 min="0"
                 step="0.01"
                 onChange={this.props.handleTimeChange}
               />

				<div className="col-2"><span className="total-time">{this.props.duration}</span></div>
           </div>
         </section>
         <section id="volume-control" className="row">
           <div className="col-2"><i class="fas fa-volume-off"></i></div>
           <input
            type="range"
            className="seek-bar col-8"
            value={this.props.currentVolume}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleVolumeChange} />
           <div className="col-2"><i class="fas fa-volume-up"></i></div>
         </section>
       </section>
     );
   }
 }

 export default PlayerBar;

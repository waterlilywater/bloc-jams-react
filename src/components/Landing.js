import React from 'react';

const Landing = () => (
  <section className="landing col-12">
  	<div className="">
    	<h2 className="here-title">Turn the Music Up!</h2>
	</div>
    <section className="selling-points row">
      <div className="point col-md-4 col-sm-12">
        <h3 className="point-title">Choose Your Music</h3>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point col-md-4 col-sm-12">
        <h3 className="point-title">Unlimited Streaming, Ad-Free</h3>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point col-md-4 col-sm-12">
        <h3 className="point-title">Mobile Enabled</h3>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;

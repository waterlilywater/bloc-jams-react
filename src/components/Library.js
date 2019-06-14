import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: albumData
    }
  }

  render() {
    return (
      <section className="library col-12">
        {
          this.state.albums.map((album, index) =>
            <div className="row">
              <Link to={`/album/${album.slug}`} key={index}>
                <div className="col-lg-4 col-sm-12">
                  <img src={album.albumCover} alt={album.title} />
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="col-lg-4 col-sm-12">{album.title}</div>
                  <div className="col-lg-4 col-sm-12">{album.artist}</div>
                  <div className="col-lg-4 col-sm-12">{album.songs.length} songs</div>
                </div>
              </Link>
            </div>
          )
        }
      </section>
    );
  }
}

export default Library;

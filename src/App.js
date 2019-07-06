import React from 'react'; //This imported object contains methods that I need in order to use React. The object is called the React library.
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


function App() {
  return (
    <div className="App">
      <header className="row">
    	<div className="col-md-6 col-sm-12">
    		<h1><Link to='/'>Bloc Jams</Link></h1>

    	</div>
        <nav className="col-md-6 col-sm-12">
          <Link to='/library'>Collection</Link>
        </nav>
      </header>
      <main className="row">
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
      </main>
      <footer className="row">
        <p>Copyright 2019 Kawita Kandpal</p>
      </footer>
    </div>
  );
}

export default App;

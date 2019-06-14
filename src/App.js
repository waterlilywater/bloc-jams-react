import React from 'react'; //This imported object contains methods that I need in order to use React. The object is called the React library.
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


function App() {
  return (
    <div className="App container">
      <header className="row">
    	<div className="col-12">
    		<h1>Bloc Jams</h1>
    	</div>
        <nav className="col-12">
          <Link to='/'>Landing</Link>
          <Link to='/library'>Library</Link>
        </nav>
      </header>
      <main className="row">
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
      </main>
    </div>
  );
}

export default App;

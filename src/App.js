import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
   render() {
     return (
       <div className="App">
         <header>
         <nav>
             <Link to='/'>Landing</Link>//a tag
             <Link to='/library'>Library</Link>//a tag
         </nav>
           <h1>Bloc Jams</h1>
         </header>
         <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album" component={Album}/>//this is the path and this is the view that goes with the view, not visible
         </main>
       </div>
     );
   }
 }
export default App;

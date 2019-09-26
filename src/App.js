import React from 'react';
import './styles/app.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/sea-adventures" render={()=> <SeaAdventure />}/> */}   
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import LogIn from './Pages/Services';
import Service from './Pages/Home';
import Default from './Pages/DefaultPage';
import Spy from './Pages/scrollspy';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Spy/>
        <div className="Routecompo">
          <Route path="/" exact component={Default} />
          <Route path="/Login" exact component={LogIn} />
          <Route path="/Service" exact component={Service} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

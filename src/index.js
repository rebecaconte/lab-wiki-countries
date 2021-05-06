import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="row">
          <CountriesList />
          {/* React Router Route rendering the CountryDetails should go here */}
        </div>
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// comment skipped to stay organized
reportWebVitals();
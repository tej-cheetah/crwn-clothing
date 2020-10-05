import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './page/homepage/homepage.component'
import './App.css';

const HatsPage = () => {
  return <div>
  <h1>Hats Page</h1>
  </div>
}

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop/hats' component={HatsPage}/>
    </div>
  );
}

export default App;

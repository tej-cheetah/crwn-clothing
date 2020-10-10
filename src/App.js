import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './page/homepage/homepage.component'
import ShopPage from './page/shop/shop.component'
import './App.css';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route path='/' component={ShopPage}/>
    </div>
  );
}

export default App;

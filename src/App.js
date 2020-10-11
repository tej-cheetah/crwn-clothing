import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './page/homepage/homepage.component'
import ShopPage from './page/shop/shop.component'
import Header from './components/header/header.component'
import SignInSignUp from './page/sign-in-sign-up/sign-in-sign-up.component'
import { auth } from './firebase/firebase.utils'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

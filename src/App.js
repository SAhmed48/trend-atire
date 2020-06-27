import React from 'react';
import './App.css';
import Homepage from './pages/home-page/home-page.component.jsx';
import {Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {

  unsubscribeFromAuth$ = null;

  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }


  componentDidMount(){
    this.unsubscribeFromAuth$ = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth$(); // avoid memory leakage.
  }

  render(){
    return (
      <div className='main_app'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignUpPage} /> 
        </Switch>
      </div>
    );
  }
  
}

export default App;

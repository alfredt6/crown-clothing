import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component'
import LoginAndRegister from './pages/login-and-register/LoginAndRegister.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';



class App extends React.Component  {
  
  unsubscribeFromAuth =  null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      // console.log(user);
      //createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());
          setCurrentUser ({            
              id: snapShot.id,
              ...snapShot.data()                     
          });

          //console.log(this.state);
        });       
      }
      else {
        setCurrentUser(userAuth);
      }
    });
  }  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
     return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={LoginAndRegister} />
        </Switch>    
      </div>
    )  
  }     
}


export default connect(null, {setCurrentUser})(App);
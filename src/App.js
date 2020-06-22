import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/Shop.component';
import Header from './components/header/Header.component'
import LoginAndRegister from './pages/login-and-register/LoginAndRegister.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component  {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth =  null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser: user });
      // console.log(user);
      //createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());
          this.setState ({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }            
          });

          console.log(this.state);
        });       
      }
      else {
        this.setState({currentUser: userAuth});
      }
    });
  }  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
     return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={LoginAndRegister} />
        </Switch>    
      </div>
    )  
  }     
}

export default App;
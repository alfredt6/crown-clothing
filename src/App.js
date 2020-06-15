import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/Shop.component';


const App = () => {  
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
        </Switch>      
      </div>
    )  
}

export default App;
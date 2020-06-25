import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header-components/header';
import HomePage from './pages/homepage';
import HomePageEn from './pages/homepage-en';

class App extends React.Component{
  render(){
  return (
    <div className="App">
  <Header />
    <Switch>
          <Route exact path='/' component={HomePageEn}/>
          <Route  path='/sr' component={HomePage}/>
        </Switch>
    </div>
  );
 }
}

export default App;
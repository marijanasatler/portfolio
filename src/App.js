import React from 'react';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Header from './components/header-components/header';
import HomePage from './pages/homepage';
import HomePageEn from './pages/homepage-en';

class App extends React.Component{
  render(){
  return (
    <HashRouter basename='/'>
    <div className="App">
  <Header />
    <Switch>
          <Route exact path='/' component={HomePageEn}/>
          <Route  path='/sr' component={HomePage}/>
        </Switch>
        <div className="icon-footer" >Icons provide by:<a className="icon-footer" href="https://icons8.com/" target="blanck">  icons8.com</a> </div>
    </div>
    </HashRouter>
  );
 }
}

export default App;
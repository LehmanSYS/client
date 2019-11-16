import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Home from './Components/Home/Home';
import Welcome from './components/Welcome/Welcome';
//import Test from './Test/';
import Home from './components/Home/Home';
import Locate from './components/Locate/Locate';

export default class App extends React.Component{
  constructor(props){
    super(); 
  }
  render(){
    const welcomePageComponent = () => <Welcome/>;
    const homePageComponent = () => <Home/>;
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' render = {welcomePageComponent}></Route>
            <Route exact path='/home' render = {homePageComponent}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

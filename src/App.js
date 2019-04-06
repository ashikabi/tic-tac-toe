import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import GameBoard from './GameBoard';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => (<Home></Home>)} />
        <Route path="/board" render={({history}) => (<GameBoard history={history} /> )} />
      </div>
    );
  }
}

export default App;

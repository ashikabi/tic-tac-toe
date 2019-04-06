import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import logo from './images/pokeball.png';
import title from './images/title.png';
import subtitle from './images/subtitle.png';
import FormDialog from './FormDialog';

class Home extends Component {

  handleSubmit(event){
    event.preventDefault();
    event.persist();
    this.props.history.push('board');
  }

    render() {
      return (
        <div className="Home">
        <form id="main" name="main" onSubmit={(event) => this.handleSubmit(event)}>

          <header className="Home-header">

            <div className="item">
              <img src={title} className="Home-title" alt="title" />
            </div>

            <div className="item">
              <img src={subtitle} className="Home-subtitle" alt="subtitle" />
            </div>

            <div className="item">
              <img src={logo} className="Home-logo" alt="logo" />
              <FormDialog />
            </div>

            <div className="item">
              <button type="submit" className="my-button info">Let's Play</button>
            </div>
         
          </header>
          </form>
        </div>
      );
    }
  }
  
  export default withRouter(Home);
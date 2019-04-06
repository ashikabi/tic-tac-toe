import React, { Component } from 'react';
import xblue from './images/x-blue.png';
import Ored from './images/0-red.png';
import './styles/board.css';


class GameBoard extends Component {
    render() {
      return (
        <div class="limiter">
        <div class="container-table100">
            <div class="table100 ver1 m-b-110">
            <table data-vertable="ver1">
                  <tr class="rw">
                    <td class="col column1" data-column="column1"><img src={xblue} alt='x' /></td>
                    <td class="col column2" data-column="column2"><img src={xblue} alt='x'/></td>
                    <td class="col column3" data-column="column3"><img src={Ored} alt='o'/></td>
                  </tr>
                  <tr class="rw">
                    <td class="col column1" data-column="column1"><img src={Ored} alt='o'/></td>
                    <td class="col column2" data-column="column2"><img src={xblue} alt='x'/></td>
                    <td class="col column3" data-column="column3"><img src={Ored} alt='o'/></td>
                  </tr>
                  <tr class="rw">
                    <td class="col column1" data-column="column1"><img src={Ored} alt='o'/></td>
                    <td class="col column2" data-column="column2"><img src={Ored} alt='o'/></td>
                    <td class="col column3" data-column="column3"><img src={Ored} alt='o'/></td>
                  </tr>
              </table>
            </div>
        </div>
      </div>
      );
    }
  }
  
  export default GameBoard;
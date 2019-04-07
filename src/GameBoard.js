import React, { Component } from 'react';
import xblue from './images/x-blue.png';
import Ored from './images/0-red.png';
import empty from './images/empty.png';
import './styles/board.css';

const emptyStyle = {width: 200,height: 200};

class GameBoard extends Component {
  constructor(props){
    super(props);
    
    this.state={
      sizeBoard:3,
    }
  }

  componentDidMount(){
      let selectedSize = localStorage.getItem('sizeBoard');
      this.setState({ sizeBoard:selectedSize});
      console.log(`selected value : ${selectedSize}x${selectedSize}`);

  }

  renderBoardSize(){
    let MAX_SIZE = this.state.sizeBoard;
    let i=0,j=0;
    let rows = [];
    let cols = [];
    let itemName = 'column';
    let colId = 'col'+' '+itemName
    let id = '',name=''

    if(MAX_SIZE>=3){

      for(j ; j < MAX_SIZE ; j++){//rows
        cols = [];
        for(i=0 ; i < MAX_SIZE ; i++){//cols
          id = `${colId}${i}`;
          name = `${itemName}${i}`
          cols.push(<td className={id} data-column={name}><img src={empty} alt='empty' style={emptyStyle} /></td>);
        }
        rows.push(<tr className="rw">{cols}</tr>);
      }
    }else{
      console.warn('Something happen, the table board was not defined...');
      throw new Error('Table Board was not defined!!');
    }
  
    return rows;

  }

    render() {
      return (
        <div className="limiter">
        <div className="container-table100">
            <div className="table100 ver1">
            <table data-vertable="ver1">
              <tbody>
                {
                  /*<tr className="rw">
                    <td className="col column1" data-column="column1"><img src={empty} alt='empty' style={emptyStyle} /></td>
                    <td className="col column2" data-column="column2"><img src={empty} alt='empty' style={emptyStyle} /></td>
                    <td className="col column3" data-column="column3"><img src={empty} alt='empty' style={emptyStyle} /></td>
                  </tr>*/
                  this.renderBoardSize()
                }
                  
                </tbody>
              </table>
            </div>
        </div>
      </div>
      );
    }
  }
  
  export default GameBoard;
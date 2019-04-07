import React, { Component } from 'react';
import xblue from './images/x-blue.png';
import Ored from './images/0-red.png';
import empty from './images/empty.png';
import playerz from './images/player-z.png';
import playerx from './images/player-x.png';
import currentPlayer from './images/turn-player.png';
import './styles/board.css';
import InfoDialog from './InfoDialog';
import FormDialog from './FormDialog';
import Button from '@material-ui/core/Button';

const emptyStyle = {width: 200,height: 200};
const squareStyle = {width: 75,height: 75,margin:10};

class GameBoard extends Component {
  constructor(){
    super();
    this.playBoard = [];
    this.winner = "*";
    this.MAX_SIZE = 3;
    this.state={
      sizeBoard:3,
      currentTurn:true,// X = true ; 0 = false
      isFinished:false
    }
  }

  componentDidMount(){
      let selectedSize = localStorage.getItem('sizeBoard');
      this.MAX_SIZE = selectedSize;
      this.setState({ sizeBoard:selectedSize});
      this.setState({currentTurn : true});
      //console.log(`selected value : ${selectedSize}x${selectedSize}`);
      this.cleanPlayBoard();
  }

  cleanPlayBoard(full){
    let rows = [];
    let cols = [];
    for(let j=0;j<this.MAX_SIZE;j++){
      cols = [];
      for(let i=0;i<this.MAX_SIZE;i++){
        cols.push("*");
      }
      rows.push(cols);
    }
    this.playBoard = rows;
    
    if(full){
      for(let j=0;j<this.MAX_SIZE;j++){
        for(let i=0;i<this.MAX_SIZE;i++){
          document.getElementById(`${j+1}${i+1}`).src = empty;
          document.getElementById(`${j+1}${i+1}`).alt = 'empty';
        }
      }
      this.setState({isFinished:false});
      this.winner = "*";
    }
    
    
  }

  playerValue(event){
    if(event.target.alt==='empty'){
      event.target.src = (this.state.currentTurn? xblue:Ored);
      event.target.alt = (this.state.currentTurn? 'X':'O');
      this.setState({currentTurn:!this.state.currentTurn});
      this.saveSelectedChoice(event);
      this.isThereAwinner();  
      if(this.winner!=='*'){
        this.setState({isFinished:true});
        console.log(`::::::::::: el ganador es ${this.winner} :::::::::::::`);
      }
    }
  }

  isThereAwinner(){
    let isAline = true;
    let j,i;
    //-------------------ROWS----------------------
    //Verifying if X is the winner in row
    for(j=0;j<this.MAX_SIZE;j++){
      isAline = true;
      for(i=0;i<this.MAX_SIZE;i++){
        if(this.playBoard[j][i]!=='X')
          isAline = false;
      }
      if(isAline){
        this.winner = "X"
        return;
      }
    }

     //Verifying if 0 is the winner in row
     for(j=0;j<this.MAX_SIZE;j++){
      isAline = true;
      for(i=0;i<this.MAX_SIZE;i++){
        if(this.playBoard[j][i]!=='0')
          isAline = false;
      }
      if(isAline){
        this.winner = "0"
        return;
      }
    }

    //-------------------COLUMNS----------------------
    //Verifying if X is the winner in column
    for(j=0;j<this.MAX_SIZE;j++){
      isAline = true;
      for(i=0;i<this.MAX_SIZE;i++){
        if(this.playBoard[i][j]!=='X')
          isAline = false;
      }
      if(isAline){
        this.winner = "X"
        return;
      }
    }

    //Verifying if 0 is the winner in column
    for(j=0;j<this.MAX_SIZE;j++){
      isAline = true;
      for(i=0;i<this.MAX_SIZE;i++){
        if(this.playBoard[i][j]!=='0')
          isAline = false;
      }
      if(isAline){
        this.winner = "0"
        return;
      }
    }

    //-------------------DIAGONAL----------------------
    //Verifying if X is the winner in diagonal positive ((1,1) (2,2) (3,3)....(n,n))
      isAline = true;
      for(i=0;i<this.MAX_SIZE;i++){
          if(this.playBoard[i][i]!=='X')
          isAline = false;
      }
      if(isAline){
        this.winner = "X"
        return;
      }

      //Verifying if 0 is the winner in diagonal positive ((1,1) (2,2) (3,3)....(n,n))
      isAline = true;
      for(i=0;i<this.MAX_SIZE;i++){
          if(this.playBoard[i][i]!=='0')
          isAline = false;
      }
      if(isAline){
        this.winner = "0"
        return;
      }

      //Verifying if X is the winner in diagonal negative ((1,3) (2,2) (3,1)....(n,n))
      isAline = true;
      for(i=0;i<this.MAX_SIZE;i++){
          if(this.playBoard[i][(this.MAX_SIZE-1)-i]!=='X')
          isAline = false;
      }
      if(isAline){
        this.winner = "X"
        return;
      }

      //Verifying if 0 is the winner in diagonal negative ((1,3) (2,2) (3,1)....(n,n))
      isAline = true;
      for(i=0;i<this.MAX_SIZE;i++){
          if(this.playBoard[i][(this.MAX_SIZE-1)-i]!=='0')
          isAline = false;
      }
      if(isAline){
        this.winner = "0"
        return;
      }
   
      isAline = false;
      for(j=0;j<this.MAX_SIZE;j++){
        for(i=0;i<this.MAX_SIZE;i++){
          if(this.playBoard[i][j]==='*')
            isAline = true;
        }
      }
      if(!isAline){
        this.winner = "D"// is a Draw
        return;
      }
  }

  saveSelectedChoice(event){
    let valsJI = event.target.name;
    let ji = valsJI.split("|");
    this.playBoard[ji[0]][ji[1]] = (this.state.currentTurn? 'X':'0');
    //console.log(this.playBoard);
  }


  renderBoardSize(){
    let i=0,j=0;
    let rows = [];
    let cols = [];

    if(this.MAX_SIZE>=3){

      for(j ; j < this.MAX_SIZE ; j++){//rows
        cols = [];
        for(i=0 ; i < this.MAX_SIZE ; i++){//cols
          cols.push(<td id={`${j}|${i}`} key={`${j}|${i}`} className={`col column${i}`} data-column={`column${i}`}>
                        <img id={`${j+1}${i+1}`} name={`${j}|${i}`} ref={`xz${j}${i}`} src={empty} alt='empty' style={emptyStyle} onClick={(event) => {this.playerValue(event)}} />
                    </td>);
        }
        rows.push(<tr id={`${j}`} key={`${j}`} className="rw">{cols}</tr>);
      }
    }else{
      console.warn('Something happen, the table board was not defined...');
      throw new Error('Table Board was not defined!!');
    }
  
    return rows;

  }

  reloadBoard(){
    window.location.reload();
  }

  handleGoHome(){
    this.props.history.push('/');
  }

    render() {
      return (
        
        <div className="limiter">
          <div id="info-players" className="info-players">
            <div id="player-x" className="player-x">
              <img src={playerx} className="player-status" alt="PlayerX" />
            </div>
            <div id="current-turn" className="current-turn" >
                <img src={currentPlayer} className="player-status" alt="CurrentPlayer" />
                <img  src={(this.state.currentTurn?xblue:Ored)} alt='current' style={squareStyle} className="turn" />
            </div>
            <div id="player-0" className="player-0">
              <img src={playerz} className="player-status" alt="PlayerZ" />
            </div>
          </div>
          <Button variant="outlined" color="primary" onClick={() =>{this.handleGoHome()}}>
            Go Home
          </Button>
          <FormDialog isPokeball={false} reload={()=>{this.reloadBoard();}} />
        <div className="container-table100">
            <div className="table100 ver1">
            <form id="board" name="board">
              <table data-vertable="ver1">
                <tbody>
                  {this.renderBoardSize()}
                  </tbody>
                </table>
              </form>
              {
                this.state.isFinished?<InfoDialog winner={this.winner} resetGame={(full)=>{this.cleanPlayBoard(full)}} />:null
              }
            </div>
        </div>
      </div>
      );
    }
  }
  
  export default GameBoard;
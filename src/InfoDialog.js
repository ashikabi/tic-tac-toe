import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import xblue from './images/x-blue.png';
import Ored from './images/0-red.png';
import draw from './images/draw.png';
import {Link} from 'react-router-dom';

const squareStyle = {width: 75,height: 75,margin:10};
const largeStyle = {width: 150,height: 75,margin : '0 200px'};

class InfoDialog extends React.Component {
  constructor(props){
    super(props);
    this.imageWinner='';
    this.state = {
      open: true,
      value:3,
      winner:''
    };
  }

  componentDidMount(){
      console.log("THE WINNER IS : "+this.props.winner);
      this.setState({winner:this.props.winner});
      if(this.props.winner==='X')
        this.imageWinner = xblue;

      if(this.props.winner==='0')
        this.imageWinner = Ored;

     if(this.props.winner==='D')
        this.imageWinner = draw;


  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={() => {this.handleClose()}}
          aria-labelledby="form-dialog-title">

          <DialogTitle id="form-dialog-title">{this.state.winner!=='D'?'THE WINNER IS : ':'IT WAS A : '}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <img  src={this.imageWinner} alt='winner' style={this.state.winner==='D'?largeStyle:squareStyle} className="turn" />
            </DialogContentText>
      
          </DialogContent>
          <DialogActions>
          <Link to="/" >Go Home</Link>
            <Button onClick={() => {this.handleClose()}} color="primary">
              Play Again
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default InfoDialog;
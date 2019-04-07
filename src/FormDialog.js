import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import logo from './images/pokeball.png';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }});

  const MAX_SIZE_BOARD = 14;

class FormDialog extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      open: false,
      value:3,
    };
  }
  
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    localStorage.setItem('sizeBoard', event.target.value.toString());
    //console.log(`selected value : ${event.target.value}x${event.target.value}`);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderMenuItems(){
    let itemList = [];
    for(let i=3; i<MAX_SIZE_BOARD;i++){
      itemList.push(<MenuItem value={i}>{i}</MenuItem>);
    }
    return itemList;
  }

  render() {

    return (
      <div>
        {
        //<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        //  Open form dialog
        //</Button>
        }
        <form id="modal" name="modal">
          <img src={logo} className="Home-logo" alt="logo" onClick={()=>{this.handleClickOpen()}} style={{"pointerEvents": "all"}} title="Press the Pokeball..." />
        </form>
        <Dialog
          open={this.state.open}
          onClose={() => {this.handleClose()}}
          aria-labelledby="form-dialog-title">

          <DialogTitle id="form-dialog-title">Customize</DialogTitle>
          <DialogContent>
            <DialogContentText>
              By default the "Tic Tac Toe" is settle down with 3x3 board. 
              But if what you want is a big challenge you can increase the size board nxn.
              <br></br>
              Enjoy the Game, Good Luck!!  
            </DialogContentText>

            <FormControl className={styles.formControl} style={{margin : '0 200px'}}>

              <InputLabel htmlFor="size-helper">Size Board</InputLabel>

              <Select
                value={this.state.value}
                onChange={(event) => {this.handleChange(event)}}
                inputProps={{
                  name: 'size',
                  id: 'size-helper',
                }}>
                
                {this.renderMenuItems()}

              </Select>

              <FormHelperText>Select the size board NxN</FormHelperText>

            </FormControl>
      
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {this.handleClose()}} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {this.handleClose()}} color="primary">
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;
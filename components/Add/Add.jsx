import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { inject, observer } from "mobx-react";


const Add=inject("tasksManager")(
  observer((props)=> {
  const state = props.state
  const open = props.open
  const handleClose= props.handleClose
  const handeleChange=props.handeleChange
  const handelesave=props.handelesave
  const savedDescription=props.savedDescription

  
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add {savedDescription}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please provide a description for a new {savedDescription}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label= {`${savedDescription} description `}
            type="email"
            fullWidth
            value={state.name}
            onChange={(e)=>handeleChange(e,'name')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
          <Button onClick={()=>handelesave(state)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}))

export default Add

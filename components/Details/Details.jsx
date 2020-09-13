import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Detail from './Detail'
import { inject, observer } from "mobx-react";
import Add from '../Add/Add'
import Snackbar from "../SnackBar/Snackbar";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

  const  Details=inject("tasksManager")(
    observer((props)=> {
  const classes = useStyles();
  const handleCloseDialog=props.handleClose
  const openDialog=props.open
  const taskId=props.taskId
  const taskName=props.taskName
  const details=props.tasksManager.details
  
  const [state, setState] = React.useState({
    name:'',
    isDone:false,
    taskId:taskId
  });
  const [open, setOpen] = React.useState({
    openAdd: false,
    snakBar: false,
    message: "",
    severity: "",
  });
  const handeleChange=(event,name)=>{
    setState({
      ...state,
      [name]: event.target.value,
    });
  }
  const handelesave=async(state)=>{
    if (state.name.length <= 2) {
      setOpen({
        ...open,
        snakBar: true,
        message: "Give the Detail a name or description",
        severity: "error",
      })
      return;
    }
    const response=  await props.tasksManager.addDetail(state)
    setOpen({
      ...open,
      snakBar: true,
      message: response,
      severity: "success",
    });
     setState({...state,name:''})
}

  
  const handleClickOpen = () => {
    setOpen({ ...open, openAdd: true });
  };
  const handleClose = () => {
    setOpen({ ...open, openAdd: false });
  };


  
  return (
    <div>
      <Dialog fullScreen open={openDialog} onClose={handleCloseDialog} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleCloseDialog} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {taskName} Details
            </Typography>
            <Button  color="inherit" onClick={handleClickOpen}>
              Add
            </Button>
            
          </Toolbar>
        </AppBar>
        {details.filter(d=>d.taskId==taskId)
        .map(d=><Detail key={d.id} name={d.name} isDone={d.isDone} id={d.id} />)}
      </Dialog>
      <Add  open={open.openAdd} state={state}
         handeleChange={handeleChange} handelesave={handelesave}
         handleClose={handleClose} savedDescription={'Detail'}   />
         <Snackbar open={open} setOpen={setOpen} />
    </div>
  );
}))
export default Details;
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { inject,observer } from 'mobx-react';
import React,{ useEffect } from 'react';
import SnapshotSum from './SnapshotSum'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(0),
    
      color: theme.palette.text.secondary,
    },
  icon:{
    color: theme.palette.primary.main,
    backgroundColor:theme.palette.secondary.main,
  },
  avatar:{
    backgroundColor:theme.palette.primary.main,
  },
  secondary:{
  color:theme.palette.secondary.main,
  
  },
  primary:{
    color:theme.palette.primary.main
  },
  grid:{
   flexBasis:0
  },
  table:{
    marginTop:'15px'
  }
  
  }));
  
    const Snapshot = inject('tasksManager')(observer((props)=>{
    const classes=useStyles()
    const assignmentTurnedInIcon = <AssignmentTurnedInIcon className={classes.icon} />
    const assignmentIcon= <AssignmentIcon className={classes.icon} />
    const assignmentLateIcon=<AssignmentLateIcon className={classes.icon} />
    return (
      
      <div className={classes.root}>
        <Grid container spacing={1}
        direction="row"
        justify="center"
        alignItems="center"> 
          <Grid className={classes.grid}  item xs={6}>
            <Paper className={classes.paper}>
            <SnapshotSum title={'Tasks open'} amount={props.tasksManager.tasksSum}  icon={assignmentIcon}
       avatar={classes.avatar} secondary={classes.secondary} primary={classes.primary}/>
            </Paper>
          </Grid>
          <Grid className={classes.grid}  item xs={6}>
            <Paper className={classes.paper}>
            <SnapshotSum title={'Details Made'} amount={props.tasksManager.detailDoneSum} icon={assignmentTurnedInIcon} 
      avatar={classes.avatar} secondary={classes.secondary}  primary={classes.primary}/>
            </Paper>
          </Grid>
          <Grid item className={classes.grid}  xs={12}>
            <Paper className={classes.paper}>
            <SnapshotSum  title={'Details to do'} amount={props.tasksManager.detailOpenSum} icon={assignmentLateIcon}
       avatar={classes.avatar}  secondary={classes.secondary} primary={classes.primary} />
            </Paper>
          </Grid>
        </Grid>
      </div>
        
       
 
   
    
    );
  }))
  
  export default Snapshot
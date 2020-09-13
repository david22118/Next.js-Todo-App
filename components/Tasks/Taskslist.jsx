import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { inject, observer } from "mobx-react";
import Grid from "@material-ui/core/Grid";
import Taskinfo from "./Taskinfo";
import QueuePlayNextIcon from "@material-ui/icons/QueuePlayNext";
import Add from "../Add/Add";
import Snackbar from "../SnackBar/Snackbar";
const dateFormat = require("dateformat");
const now = new Date();

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: 14,
    padding: 5,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    maxWidth: 200,
  },
});

const TasksList = inject("tasksManager")(
  observer((props) => {
    const classes = useStyles();
    const tasks = props.tasksManager.tasks;

    const [state, setState] = React.useState({
      name: "",
      startDate: dateFormat(now, "yyyy-mm-dd'T'HH:MM:ss"),
      lastUpdate: dateFormat(now, "yyyy-mm-dd'T'HH:MM:ss"),
    });
    const [open, setOpen] = React.useState({
      openAdd: false,
      snakBar: false,
      message: "",
      severity: "",
    });
    const handeleChange = (event, name) => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
    const handelesave = async (state) => {
      if (props.tasksManager.tasksSum == 10) {
        setOpen({
          ...open,
          snakBar: true,
          message: "The amount of tasks is limited to 10!",
          severity: "error",
        });
        return;
      }
      if (state.name.length <= 2) {
        setOpen({
          ...open,
          snakBar: true,
          message: "Give the Task a name or description",
          severity: "error",
        })
        return;
      }
      const response = await props.tasksManager.addTask(state);
      setOpen({
        ...open,
        snakBar: true,
        message: response,
        severity: "success",
      });

      setState({ ...state, name: "" });
    };

   
    const handleClickOpen = () => {
      setOpen({ ...open, openAdd: true });
    };
    const handleClose = () => {
      setOpen({ ...open, openAdd: false });
    };

    return (
      <Grid
        style={{ marginTop: "25px" }}
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <QueuePlayNextIcon onClick={handleClickOpen} cursor="pointer" />
                <TableRow>
                  <StyledTableCell align="left">Description</StyledTableCell>
                  <StyledTableCell align="left">Start Date</StyledTableCell>
                  <StyledTableCell align="left">Last Update</StyledTableCell>
                  <StyledTableCell align="justify">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((task) => (
                  <Taskinfo
                    id={task.id}
                    key={task.id}
                    name={task.name}
                    startDate={task.startDate}
                    lastUpdate={task.lastUpdate}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Add
          open={open.openAdd}
          state={state}
          handeleChange={handeleChange}
          handelesave={handelesave}
          handleClose={handleClose}
          savedDescription={"Task"}
        />
        <Snackbar open={open} setOpen={setOpen} />
      </Grid>
    );
  })
);
export default TasksList;

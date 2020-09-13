  import React from "react";
  import { withStyles } from "@material-ui/core/styles";
  import TableCell from "@material-ui/core/TableCell";
  import TableRow from "@material-ui/core/TableRow";
  import { inject, observer } from "mobx-react";
  import DeleteIcon from "@material-ui/icons/Delete";
  import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
  import Details from "../Details/Details";

  const dateFormat = require("dateformat");
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      fontSize: 16,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const TasksInfo = inject("tasksManager")(
    observer((props) => {
      const name = props.name;
      const startDate = props.startDate;
      const lastUpdate = props.lastUpdate;
      const id = props.id;
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handeldeleteTask = async () => {
        const response = await props.tasksManager.deleteTask(id);
        
      };

      return (
        <>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              {name}
            </StyledTableCell>
            <StyledTableCell align="right">
              {dateFormat(startDate, "dd/mm/yyyy")}
            </StyledTableCell>
            <StyledTableCell align="right">
              {dateFormat(lastUpdate, "dd/mm/yyyy")}
            </StyledTableCell>
            <StyledTableCell align="left">
              <DeleteIcon onClick={handeldeleteTask} cursor="pointer" />
              <PlaylistPlayIcon cursor="pointer" onClick={handleClickOpen} />
            </StyledTableCell>
          </StyledTableRow>
          <Details  open={open} handleClose={handleClose} taskId={id} taskName={name} />
        </>
      );
    })
  );
  export default TasksInfo;

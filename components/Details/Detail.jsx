import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import { inject, observer } from "mobx-react";
import DeleteIcon from "@material-ui/icons/Delete";
const Detail =inject("tasksManager")(
  observer((props)=> {

  const handelDelete= async()=>{
  const response=await props.tasksManager.deleteDetail(props.id);
  
}
  
  const handlechecked = async () => {
    const response=await props.tasksManager.updateDetail(props.id);
};
   
  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary={props.name} />
          <Checkbox
            checked={props.isDone}
            onChange={handlechecked}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <DeleteIcon onClick={handelDelete} cursor="pointer" />
        </ListItem>
        <Divider />
      </List>
    </>
  );
}));
export default Detail;

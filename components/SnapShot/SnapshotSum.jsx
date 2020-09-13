import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';




export default function SnapshotSum(props) {
  const title= props.title
  const amount = props.amount
  const icon= props.icon
  const secondary=props.secondary
  const primary = props.primary
  return (
    
      <ListItem >
        <ListItemAvatar>
          <Avatar className={props.avatar}>
            {icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText  classes={{ secondary: secondary,primary:primary }}
         primary={title} secondary={amount} />
      </ListItem>
  
  );
}
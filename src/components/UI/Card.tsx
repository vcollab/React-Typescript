import React from "react";
import "./Card.css";
import Box from '@material-ui/core/Box';

const Card = (props : any) => {
  const classes = "card " + props.className;
  return (
    <div style={{ width: '100%' }}>
  
        <Box component="span" visibility="visible" bgcolor="background.paper">
        <div className={classes}>
        {props.children}
        </div>
        </Box>
        
        </div>
  )
};
export default Card;

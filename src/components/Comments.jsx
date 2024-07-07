import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "../styles/Comments.css";

function Comments(props) {
  const { img, name, text } = props;
  return (
    <>
      <List
        sx={{
          width: "99%",
          maxWidth: 360,
          bgcolor: "white",
          marginBottom: "3px",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar className="comment-img">
            <Avatar>
              <img className="img" src={img} alt="" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className="font"
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {text}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
}

export default Comments;

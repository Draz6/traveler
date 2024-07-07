import React from "react";
import Popper from "@mui/material/Popper";
import Comments from "./Comments";
import { useState, useEffect, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import user from "../assets/images/user.jfif";
import "../styles/PopUpCard.css";

export default function PopUpCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { pic, name, description } = props;
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const inputRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const [comments, setComments] = useState([]);

  const addItem = () => {
    const userName = nameRef.current.value;
    const text = inputRef.current.value;
    let image = imageRef.current.value;
    if (image == "") {
      image = user;
    }
    const userComments = {
      name: userName,
      text: text,
      image: image,
    };

    setComments([...comments, userComments]);
    return (
      (inputRef.current.value = ""),
      (nameRef.current.value = ""),
      (imageRef.current.value = "")
    );
  };
  const removeItem = () => {
    todos.pop();
    setTodos([...todos]);
  };
  const removeAll = () => {
    setTodos([]);
  };
  console.log(comments);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <button
        aria-describedby={id}
        type="button"
        id="openBtn"
        onClick={handleClick}
      >
        More
      </button>
      <div>
        <Popper id={id} open={open} anchorEl={anchorEl} className="popup">
          <div>
            <div>
              {" "}
              <button onClick={handleClick} id="closeBtn">
                X
              </button>
            </div>
            <img src={pic} alt="No-photo" />
            <div className="description">
              <h1>{name} </h1>
              <p>{description}</p>
            </div>
            <h1 className="comments-header">Comments</h1>
            <div className="comments">
              <p className="no-comments">No comments yet..</p>
              <ul>
                {comments.map((item) => {
                  return (
                    <li>
                      {" "}
                      <Comments
                        text={item.text}
                        name={item.name}
                        img={item.image}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="add-comment">
              <input ref={nameRef} type="text" placeholder="Name" />
              <input ref={inputRef} type="text" placeholder="Comment.. " />
              <div>
                <input ref={imageRef} type="text" placeholder="Image URL" />
                <button onClick={addItem}>
                  <SendIcon /> Send
                </button>
              </div>
            </div>
          </div>
        </Popper>
      </div>
    </div>
  );
}

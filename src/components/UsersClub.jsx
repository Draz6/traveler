import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect, useRef } from "react";
import user from "../assets/images/user.jfif";
import "../styles/UsersClub.css";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow className="table ">
        <TableCell>
          <IconButton
            className="table-cell"
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          {" "}
          <Avatar className="list-img">
            {" "}
            <img className="img" src={row.imgURL} alt="" />
          </Avatar>
        </TableCell>
        <TableCell className="table-cell" component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell className="table-cell" align="right">
          {row.from}
        </TableCell>
        <TableCell className="table-cell" align="right">
          {row.to}
        </TableCell>
        <TableCell className="table-icon" align="right">
          <a href={`mailto:${row.email}`}>
            <button className="mail-btn">
              {" "}
              <EmailIcon className="mail-icon" />
            </button>
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div>
                <p className="text">{row.text}</p>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function UsersClub() {
  const emailRef = useRef();
  /*const nameRef = useRef();
const fromRef = useRef();
const imageRef = useRef();
 const toRef = useRef();
 const textRef = useRef();*/
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const nameRef = useRef();

  useEffect(() => {
    async function getDataFromApi() {
      try {
        await getDocs(collection(db, "club")).then((querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setUsers(newData);
          setIsLoading(false);
        });
      } catch (error) {
        throw new Error(error);
      }
    }
    getDataFromApi();
  }, []);

  console.log(users);

  const [name, setName] = useState();
  const [text, setText] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const addData = async (e) => {
    const fname = nameRef.current.value;

    if (image == "") {
      setImage(user);
    }

    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "club"), {
        name: name,
        imgURL: image,
        email: email,
        from: from,
        to: to,
        text: text,
      });
      alert(" Success ");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    return (nameRef.current.value = "");
  };

  return (
    <div>
      <Navbar />

      <div className="find-partner">
        <h1>FIND YOUR PARTNER</h1>
      </div>
      <form className="add-user">
        <div className="add-mes">
          <TextField
            label="name"
            ref={nameRef}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField label="from" onChange={(e) => setFrom(e.target.value)} />
          <TextField label="to" onChange={(e) => setTo(e.target.value)} />
          <TextField label="mail" onChange={(e) => setEmail(e.target.value)} />
          <TextField
            label="img URL"
            onChange={(e) => setImage(e.target.value)}
          />

          <TextField label="Text" onChange={(e) => setText(e.target.value)} />
          <button className="join-btn" onClick={addData}>
            JOIN
          </button>
        </div>
      </form>

      <TableContainer
        component={Paper}
        className="table"
        sx={{
          color: "white",
        }}
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow className="table-header">
              <TableCell />
              <TableCell />
              <TableCell className="table-cell">NAME</TableCell>
              <TableCell className="table-cell" align="right">
                FROM
              </TableCell>
              <TableCell className="table-cell" align="right">
                TO
              </TableCell>
              <TableCell className="table-cell" align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
}

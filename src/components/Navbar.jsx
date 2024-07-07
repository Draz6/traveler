import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div id="nav">
      <ul id="navList">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/133/602/non_2x/man-traveling-logo-black-and-white-vector.jpg"
            alt=""
          />
          <h4 id="logo">TRAVELER</h4>
        </div>
        <ul className="menu">
          <a href="/home">
            <li>Home</li>
          </a>
          <a href="/trips">
            <li>Trips</li>
          </a>
          <a href="/club">
            <li>Club</li>
          </a>
          <a href="/login">
            {" "}
            <li>
              <PersonIcon />
            </li>
          </a>
        </ul>
      </ul>
    </div>
  );
}

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Slideshow from "./Slideshow";
import Trips from "./Trips";
import UsersClub from "./UsersClub";
import SignUp from "./SignUp";
import LogIn from "./LogIn";


export default function Routers() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Slideshow />} />
          <Route path="/home" element={<Slideshow />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/club" element={<UsersClub />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import Card from "./Card";
import PopUpCard from "./PopUpCard";
import loading from "../assets/images/loading.gif";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Trips.css";

// get data by api
export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getDataFromApi() {
      try {
        await getDocs(collection(db, "trips")).then((querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setTrips(newData);
          setIsLoading(false);
        });
      } catch (error) {
        throw new Error(error);
      }
    }
    getDataFromApi();
  }, []);

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div id="card">
        <div id="sideBar"></div>

        <div id="containerDiv">
          {isLoading ? (
            <div className="loading">
              <img src={loading} alt="" />
              Loading…
            </div>
          ) : (
            <div>
              {" "}
              {trips.map((item) => (
                <div id="cardsDiv">
                  {console.log(item)}
                  <Card
                    name={item.name}
                    pic={item.imgURL}
                    price={item.price + " $"}
                    city={item.city}
                    category={item.category}
                    rating={item.rating}
                  />
                  <PopUpCard
                    pic={item.imgURL}
                    name={item.name}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

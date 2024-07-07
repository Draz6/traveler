import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/Slideshow.css";

const header = {
  color: "white",
  textAlign: "center",
  position: "absolute",
  marginLeft: "550px",
  top: "20px",
  fontSize: "180px",
  fontFamily: "Anton SC, sans-serif",
};
const p = {
  color: "white",
  textAlign: "center",
  position: "absolute",
  top: "50px",
  left: "45%",
  fontSize: "20px",
  zIndex: "1",
};
const startBtn = {
  color: "white",
  position: "absolute",
  left: "42%",
  bottom: "50px",
  fontSize: "20px",
  padding: "10px",
  width: "350px",
  borderRadius: "5px",
  opacity: "1",
  zIndex: "1",
  fontWeight: "bolder",

  background:
    "radial-gradient(circle, rgba(255,97,180,1) 0%, rgba(255,23,176,1) 35%, rgba(252,31,76,1) 100%)",
};

const line = {
  width: "100%",
  height: "120px",
  position: "absolute",
  bottom: "0px",
  background:
    "linear-gradient(180deg, rgba(255,97,180,0) 0%, rgba(0,0,0,1) 100%)",
};

const divStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "5PX",
  height: "700px",
  width: "95%",
  zIndex: "-1",
  left: "39px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1532690913001-11d5e03af4a4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "B R A Z I L",
  },
  {
    url: "https://images.unsplash.com/photo-1575641754416-ebad8bb38531?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "THAILAND",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "INDONESIA",
  },
  {
    url: "https://images.unsplash.com/photo-1564469725611-9bacd61fb101?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "E G Y P T",
  },
  {
    url: "https://images.unsplash.com/photo-1595983639655-9ad595441c47?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "COLOMBIA",
  },
  {
    url: "https://images.unsplash.com/photo-1568774150879-20a2d50d2a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "J A P A N",
  },
  {
    url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9yd2F5fGVufDB8MHwwfHx8MA%3D%3D",
    caption: "NORWAY",
  },
  {
    url: "https://images.unsplash.com/photo-1649662443353-6d7f474b9981?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: " C U B A",
  },
  {
    url: "https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "I N D I A",
  },
];

export default function Slideshow() {
  return (
    <>
      <div className="slide-container">
        <p style={p}>YOUR NEXT VACATIOM IN </p>
        <div className="logo-div">
          <div className="logo">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/133/602/non_2x/man-traveling-logo-black-and-white-vector.jpg"
              alt=""
            />
          </div>
          <p>TRAVELER</p>
        </div>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div className="slide">
                <div className="header">
                  <h1 style={header}>{slideImage.caption}</h1>
                </div>
                <img src={slideImage.url} alt="" style={divStyle} />
              </div>
            </div>
          ))}
        </Slide>

        <img
          className="traveler"
          src="https://static.vecteezy.com/system/resources/previews/024/549/177/original/travelers-couple-with-the-backpack-transparent-backgrounde-adventure-and-travel-in-the-mountains-region-concept-png.png"
          alt=""
        />
        <a href="/trips">
          {" "}
          <button style={startBtn}>GET STARTED</button>
        </a>
        <div style={line}></div>
      </div>
    </>
  );
}

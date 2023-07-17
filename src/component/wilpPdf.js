import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./wilp.css";
import Instruc from "./Intruc.jpg";

const WilpPdf = () => {
  return (
    <>
      <img
        src={Instruc}
        style={{ width: "80%", marginLeft: "100px", marginTop: "100px" }}
      />
      <div style={{ marginTop: "50px", marginLeft: "50%" }}>
        <button
          type="button"
          onclick="alert('Sucess!')"
          style={{
            padding: "10px",
            color: "white",
            backgroundColor: "#007fff",
            cursor: "pointer"
          }}
        >
          Accept
        </button>
      </div>
    </>
  );
};

export default WilpPdf;

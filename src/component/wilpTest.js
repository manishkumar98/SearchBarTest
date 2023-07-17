import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./wilp.css";
import wilp from "./wilp.jpg";
import { useHistory } from "react-router-dom";

const WilpTest = () => {
  const history = useHistory();
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <img src={wilp} style={{ width: "300px", height: "180px" }} />
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            float: "right",
            fontSize: "40px",
            fontWeight: "600  ",
            marginTop: "80px",
            marginRight: "100px"
          }}
        >
          Welcome to WILP’s iTEST Portal
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <div class="card">
          <div className="taco">TACO</div>
          <div className="calculus">Calculus</div>
          <div className="ec2">EC2</div>
          <div style={{ display: "flex" }}>
            <div className="time">IST 10:00am</div>
            <div className="date">23/07/2023</div>
          </div>
        </div>
        <div
          class="card"
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/wilppdf");
          }}
        >
          <div className="taco">TACO</div>
          <div className="calculus">Engineering Materials</div>
          <div className="ec2">EC2</div>
          <div style={{ display: "flex" }}>
            <div className="time">IST 10:00am</div>
            <div className="date">23/07/2023</div>
          </div>
        </div>
        <div class="card">
          <div className="taco">TACO</div>
          <div className="calculus">Elec. & Electronics Tech.</div>
          <div className="ec2">EC2</div>
          <div style={{ display: "flex" }}>
            <div className="time">IST 10:00am</div>
            <div className="date">23/07/2023</div>
          </div>
        </div>
        <div class="card">
          <div className="taco">TACO</div>
          <div className="calculus">Mechanics Of Solids</div>
          <div className="ec2">EC2</div>
          <div style={{ display: "flex" }}>
            <div className="time">IST 10:00am</div>
            <div className="date">23/07/2023</div>
          </div>
        </div>
        <div class="card">
          <div className="taco">Practice Tests</div>
          <div className="calculus" style={{ marginLeft: "250px" }}>
            (10)
          </div>
          <div className="ec2">Avail NOW!!</div>
        </div>
      </div>
    </>
  );
};

export default WilpTest;

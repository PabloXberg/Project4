import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardDetails from "./CardDetails";
import females from "./femalebig.png"
import males from "./malesmall.png"
import genderless from "./glessbig.png"
import unknown from "./unknownsmall.png"

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      const{ id, image, name, status, location, gender } = x;

      let color = "";                                                 // CHANGING THE BORDER COLOR
      if (status === "Dead") { color = "Red" }
      else if (status === "Alive") { color = "Green" }
      else if (status === "unknown") { color = "Gray" }
      
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          > 
            <img className={`${styles.img} img-fluid`} style={{border: `solid 5px ${color}`}} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-1 text-center">{name}</div>
            </div>
           </div>
           
         {(() => {                                                              //    TRYING TO PUT AN IMAGE DEPENDING ON DE GENDER
              if (gender === "Female") { return <div  className={`${styles.gender} position-absolute`} ><img className={`${styles.genderStyle } img-fluid`}  src={females} alt="" /> </div>; }
              else if (gender === "Male") { return <div  className={`${styles.gender} position-absolute`} > <img className={`${styles.genderStyle } img-fluid`}  alt="Male" src={males} /> </div>; } 
              else if (gender === "Genderless") { return <div  className={`${styles.gender}  position-absolute`} > <img className={`${styles.genderStyle } img-fluid`}  alt="Genderless" src={genderless} /> </div>; }
              else {return <div  className={`${styles.gender}  position-absolute `}  > <img alt = "Sex Unknown" src={unknown}/> </div>;}
        })()}
          {/* {(() => {                                                                       //TO SHOW THE STATUS BADGE
             if (status === "Dead") { return (<div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>); }
             else if (status === "Alive") {
             return (<div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>);}
             else {return (<div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>);}
           })()} */}
           
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;

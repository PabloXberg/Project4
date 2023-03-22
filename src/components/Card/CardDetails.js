import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import females from "./femalesmall.png"
import males from "./malemidle.png"
import genderless from "./glessbig.png"
import unknown from "./unknownmidle.png"
import styles from "./Card.module.scss";

const CardDetails = () => {
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  const { name, location, origin, gender, image, status, species } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {                                       // Fetching wanted Character Data 
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className={`${styles.imgDetails} img-fluid`} src={image} alt="" />

        {(() => {                                                               // Changing Colors depending on the status 
                if (status === "Dead") { return <div className={`${styles.badgeDetails} position-absolute badge bg-danger`}>{status}</div>; }
                else if (status === "Alive") { return <div className={`${styles.badgeDetails} position-absolute badge bg-success`}>{status}</div>; }
                else { return <div className={`${styles.badgeDetails} position-absolute badge bg-secondary`}>{status}</div>; }
        })()}

        {(() => {                                                              //    TRYING TO PUT AN IMAGE DEPENDING ON DE GENDER
              if (gender === "Female") { return <div  className={`${styles.genderStyle} position-absolute`} ><img className={`${styles.genderStyle } img-fluid`}  src={females} alt="" /> </div>; }
              else if (gender === "Male") { return <div  className={`${styles.genderStyle} position-absolute`} > <img className={`${styles.genderStyle } img-fluid`}  alt="Male" src={males} /> </div>; } 
              else if (gender === "Genderless") { return <div  className={`${styles.genderStyle}  position-absolute`} > <img className={`${styles.genderStyle } img-fluid`}  alt="Genderless" src={genderless} /> </div>; }
              else {return <div  className={`${styles.genderStyle}  position-absolute `}  > <img alt = "Sex Unknown" src={unknown}/> </div>;}
        })()}

        <div className="content mb-5">
          
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

import React from "react";
import "./searchPage.css";

const DisplayList = (props) => {
  const renderCar = props.carData.map((data) => {
    return (
      <div className="carBox" key={data.id}>
        <h3>{data.Name}</h3>
        <p>Cylinders: {data.Cylinders}</p>
        <p>Displacement: {data.Displacement}</p>
        <p>Origin: {data.Origin}</p>
      </div>
    );
  });
  return (
    <div className="carList">
        {renderCar}
    </div>
  );
};

export default DisplayList;

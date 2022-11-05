import React from "react"

const LocationDD = () => {
  return (
    <>
      <div className="location__container">
        <select className="country__locations">
          <option value="grapefruit"> Russia</option>
          <option value="lime"> Pakistan</option>
          <option selected value="coconut">
            All Somaila
          </option>
          <option value="mango">Ameraica</option>
        </select>
      </div>
    </>
  );
};

export default LocationDD;

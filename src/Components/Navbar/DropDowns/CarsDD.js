import React from 'react'

const CarsDD = () => {
  return (
    <div className="cars__container">
        <select className="cars__option">
          <option value="grapefruit"> Cars1</option>
          <option value="lime"> Cars2</option>
          <option selected value="coconut">
            Cars
          </option>
          <option value="mango">Cars3</option>
        </select>
      </div>
  )
}

export default CarsDD
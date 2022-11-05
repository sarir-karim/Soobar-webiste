import React from 'react'

const ElectronicsDD = () => {
  return (
    <div className="electronics__container">
        <select className="electronics__option">
          <option value="grapefruit"> Electronics1</option>
          <option value="lime"> Electronics2</option>
          <option selected value="coconut">
            Electronics
          </option>
          <option value="mango">Electronics3</option>
        </select>
      </div>
  )
}

export default ElectronicsDD
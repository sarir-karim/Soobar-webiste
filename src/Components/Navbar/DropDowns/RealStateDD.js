import React from 'react'

const RealStateDD = () => {
  return (
    <div className="realstate__container">
        <select className="realstate__option">
          <option value="grapefruit"> Urdu</option>
          <option value="lime"> French</option>
          <option selected value="coconut">
            Real Estate
          </option>
          <option value="mango">Hindi</option>
        </select>
      </div>
  )
}

export default RealStateDD
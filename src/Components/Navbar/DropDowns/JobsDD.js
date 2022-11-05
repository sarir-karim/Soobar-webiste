import React from 'react'

const JobsDD = () => {
  return (
    <div className="jobs__container">
        <select className="jobs__option">
          <option value="grapefruit"> Jobs1</option>
          <option value="lime"> Jobs2</option>
          <option selected value="coconut">
            Jobs
          </option>
          <option value="mango">Jobs3</option>
        </select>
      </div>
  )
}

export default JobsDD
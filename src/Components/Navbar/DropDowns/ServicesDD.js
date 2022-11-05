import React from 'react'

const ServicesDD = () => {
  return (
    <div className="services__container">
        <select className="services__option">
          <option value="grapefruit"> Urdu</option>
          <option value="lime"> French</option>
          <option selected value="coconut">
            Services
          </option>
          <option value="mango">Hindi</option>
        </select>
      </div>
  )
}

export default ServicesDD
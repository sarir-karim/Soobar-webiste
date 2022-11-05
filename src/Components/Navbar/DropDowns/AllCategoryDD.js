import React from 'react'
import './AllDD.css'

const AllCategoryDD = () => {
  return (
    <div className="allCate__container">
        <select className="allCate__option">
          <option value="grapefruit">  All Categories2</option>
          <option value="lime">  All Categories3</option>
          <option selected value="coconut">
            All Categories
          </option>
          <option value="mango"> All Categories4</option>
        </select>
      </div>
  )
}

export default AllCategoryDD
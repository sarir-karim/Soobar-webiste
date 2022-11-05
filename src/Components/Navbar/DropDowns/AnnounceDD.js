import React from 'react'

const AnnounceDD = () => {
  return (
    <div className="announce__container">
        <select className="announce__option">
          <option value="grapefruit"> Announcement2</option>
          <option value="lime"> Announcement3</option>
          <option selected value="coconut">
           Announcement
          </option>
          <option value="mango">Announcement4</option>
        </select>
      </div>
  )
}

export default AnnounceDD
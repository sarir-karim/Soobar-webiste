import React from "react";
import {FiSearch }from "react-icons/fi";

const SearchDD = () => {
  return (
    <div className="form__container">
      <form>
        <input type="text" placeholder="Search here..." />
        <button type="submit">
          <FiSearch size={22} />
        </button>
      </form>
    </div>
  );
};

export default SearchDD;

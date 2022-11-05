import React from "react";
import "./PopularStyles.css";
import PopularCategories from "./Data";
// import Car from "../../Assets/PopImages/Car.png";
const Popular = () => {
  return (
    <>
      <div className="popular__wrapper">
        <h2>Popular Categories</h2>
        <div className="cards__container">
          {PopularCategories.map((popC) => {
            return (
              <div className="card">
                <img src={popC.image} alt="car" />
                <div className="card__info">
                  <h5 className="card__title">{popC.title}</h5>
                  <p className="card__description">{popC.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="seeMore__btn">
          <button>See More</button>
        </div>
      </div>
    </>
  );
};
export default Popular;
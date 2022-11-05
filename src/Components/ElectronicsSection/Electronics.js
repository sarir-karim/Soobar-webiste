import React from "react";
import "./ElectronicsStyle.css"
import ElectronicsData from "./Data";

const FreshAds = () => {
  return (
    <>
      <div className="electronics__wrapper">

       <div className="electronics__subWrap">
       <h4 className="electronics">Electronics</h4>
        <span className="seeAll__electronics">See All</span>
          </div>

        <div className="electronicsCards__container">
          {ElectronicsData.map((electronicsData) => {
            return (
              <div className="electronics__card">
                <img src={electronicsData.image} alt="electronics" />
                <div className="electronicsCard__info">
                  <div className="title__wrapper">
                    <h5 className="electronicsCard__title">{electronicsData.title}</h5>
                    <img className="heart__icon" src={electronicsData.heartIcon} alt="" />
                  </div>
                  <p className="electronicsCard__detail">{electronicsData.detail}</p>
                  <h6 className="price__wrapper">
                    Price: <span className="freshAdCard__price">{electronicsData.price}</span>
                  </h6>
                  <div className="location__wrapper">
                    <img className="location__icon" src={electronicsData.locationIcon} alt="" />
                    <p className="electronics__location">{electronicsData.location}</p>
                  </div>
                  
                </div>
                </div>
            );
          })}
          </div>
      </div>
    </>
  );
};

export default FreshAds;

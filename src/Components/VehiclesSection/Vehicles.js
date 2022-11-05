import React from "react";
import "./VehicleStyle.css"
import VehiclesData from './Data';

const Vehicles = () => {
  return (
    <>
      <div className="vehicles__wrapper">

        <div className="vehicles__subWrap">
        <h4 className="vehicles">Vehicles</h4>
        <span className="seeAll__vehicles">See All</span>
        </div>

        <div className="vehiclesCards__container">
          {VehiclesData.map((vehiclesData) => {
            return (
              <div className="vehicles__card">
                <img src={vehiclesData.image} alt="vehicles" />
                <div className="vehiclesCard__info">
                  <div className="title__wrapper">
                    <h5 className="vehiclesCard__title">{vehiclesData.title}</h5>
                    <img className="heart__icon" src={vehiclesData.heartIcon} />
                  </div>
                  <p className="vehiclesCard__detail">{vehiclesData.detail}</p>
                  <h6 className="price__wrapper">
                    Price: <span className="vehicleCard__price">{vehiclesData.price}</span>
                  </h6>
                  <div className="location__wrapper">
                    <img className="location__icon" src={vehiclesData.locationIcon} />
                    <p className="vehicles__location">{vehiclesData.location}</p>
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

export default Vehicles;

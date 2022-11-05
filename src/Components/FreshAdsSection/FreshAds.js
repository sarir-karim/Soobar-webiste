import React from "react";
import "./FreshAdStyles.css";
import FreshAdsData from "./Data";

const FreshAds = () => {
  return (
    <>
      <div className="freshAd__wrapper">
        <div className="freshAd__subWrapper">
        <h2>Fresh Ads</h2>
        <div className="freshAd__underline"></div>

        <div className="freshAdTitle__wrapper">
          <h4 className="vehicles">Vehicles</h4>
          <span className="seeAll__vehicle">See All</span>
        </div>

        <div className="freshAdCards__container">
          {FreshAdsData.map((freshData) => {
            return (
              <div className="freshAd__card">
                <img src={freshData.image} alt="vehicles" />
                <div className="freshAdCard__info">
                  <div className="title__wrapper">
                    <h5 className="freshAdCard__title">{freshData.title}</h5>
                    <img
                      className="heart__icon"
                      src={freshData.heartIcon}
                      alt=""
                    />
                  </div>
                  <p className="freshAdCard__detail">{freshData.detail}</p>
                  <h6 className="price__wrapper">
                    Price:{" "}
                    <span className="freshAdCard__price">
                      {freshData.price}
                    </span>
                  </h6>
                  <div className="location__wrapper">
                    <img
                      className="location__icon"
                      src={freshData.locationIcon}
                      alt=""
                    />
                    <p className="freshAd__location">{freshData.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="seeMore__btn">
          <button>See More</button>
        </div> */}
      </div>
        </div>
    </>
  );
};

export default FreshAds;

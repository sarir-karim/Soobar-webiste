import React from "react";
// css
import "./popularDetails.css";

// img
import Homelogo from "./img/home.png";
import ArrowIcon from "./img/arrow.png";
import PopCar from "./img/popCar.png";
import resizeImg from "./img/resize.png";
import profile from "./img/profile.png";
import heartProfile from "./img/heartProfile.png";
import shareProfile from "./img/shareProfile.png";
import check from "./img/check.png";
import star from "./img/star.png";
// profile  card imgs
import profileEmail from "./img/ProfileEmail.png";
import profilePhone from "./img/profilePhone.png";
import profileTime from "./img/ProfileTime.png";
import profileWhatsapp from "./img/profilewhatsapp.png";
import reportIcon from "./img/report.png";
import locationIcon from "./img/location.png";
import mapIcon from "./img/map.png";
import plainIcon from "./img/plain.png";

// details image

import fuelIcon from "./img/details/fuel.png";
import carTypeIcon from "./img/details/carType.png";
import transmissionIcon from "./img/details/transmision.png";
import speedIcon from "./img/details/speed.png";
import engineIcon from "./img/details/engine.png";
import modelIcon from "./img/details/model.png";
import colorIcon from "./img/details/color.png";
import conditionIcon from "./img/details/condition.png";
import eyeIcon from "./img/details/eye.png";
import twimojeIcon from "./img/details/twimoje.png";
import calenderIcon from "./img/details/calender.png";

// safety card image
import safetyLogo from "./img/shield.png";

// icon
import { BsDot } from "react-icons/bs";

import Slider from "react-slick";

const PopularDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="popular__container">
        <div className="popular__subContainer">
          <div className="jamortron__btns">
            <div className="home__btns">
              <img className="homeIcon" src={Homelogo} alt="home icon" />
              <img className="arrowIcon" src={ArrowIcon} alt="arrow icon" />
            </div>
            <div className="vehicles__btns">
              <span>Vehicles</span>
              <img className="arrowIcon" src={ArrowIcon} alt="arrow icon" />
            </div>
            <div className="cars__btns">
              <span>Cars</span>
            </div>
          </div>
          <div className="detail__section">
            <h1>Porsche Panamara</h1>
            <div className="image__box">
              <div className="image__main">
                <img className="popCar" src={PopCar} alt="/" />
                <img className="resize" src={resizeImg} alt="/" />
                <div className="slider">
                  <Slider {...settings} className="slider__main">
                    <div className="image__1">
                      <img src={PopCar} alt="" />
                    </div>
                    <div className="image__1">
                      <img src={PopCar} alt="" />
                    </div>
                    <div className="image__1">
                      <img src={PopCar} alt="" />
                    </div>
                    <div className="image__1">
                      <img src={PopCar} alt="" />
                    </div>
                    <div className="image__1">
                      <img src={PopCar} alt="" />
                    </div>
                    <div className="image__1">
                      <img src={PopCar} alt="" />
                    </div>
                  </Slider>
                </div>
                <div className="product__details">
                  <h5>Details</h5>
                  <div className="detail__items">
                    <div className="item1">
                      <ul>
                        <li>
                          <img src={fuelIcon} alt="" />
                          <span>Fuel</span>
                        </li>
                        <li>
                          <img src={carTypeIcon} alt="" />
                          <span>Car type</span>
                        </li>
                        <li>
                          <img src={transmissionIcon} alt="" />
                          <span>Transmission</span>
                        </li>
                        <li>
                          <img src={speedIcon} alt="" />
                          <span>Mileage</span>
                        </li>
                      </ul>
                    </div>
                    <div className="item2">
                      <ul>
                        <li>
                          <span>Diesel</span>
                        </li>
                        <li>
                          <span>Sport</span>
                        </li>
                        <li>
                          <span>White</span>
                        </li>
                        <li>
                          <span>Automatic</span>
                        </li>
                      </ul>
                    </div>
                    <div className="item3">
                      <ul>
                        <li>
                          <img src={engineIcon} alt="" />
                          <span>Horsepower</span>
                        </li>
                        <li>
                          <img src={modelIcon} alt="" />
                          <span>Model year</span>
                        </li>
                        <li>
                          <img src={colorIcon} alt="" />
                          <span>Color</span>
                        </li>
                        <li>
                          <img src={conditionIcon} alt="" />
                          <span>Condition</span>
                        </li>
                      </ul>
                    </div>
                    <div className="item4">
                      <ul>
                        <li>
                          <span>450</span>
                        </li>
                        <li>
                          <span>2012</span>
                        </li>
                        <li>
                          <span>White</span>
                        </li>
                        <li>
                          <span>Used</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="description__main">
                  <h5>Description</h5>
                  <div className="description__detail">
                    <ul>
                      <li className="detail__list">Wholesale / dropshipping available!</li>
                      <li className="detail__list2">
                        Since 2010 we have been keeping up with the times and
                        fashion trends in the sports shoes industry! We present
                        you models for sale of our hyper store! Only new items!
                        Only hits!
                      </li>
                      <li className="detail__list3">
                        The Nike AIR MAX 90 (GS) is the iconic athletic shoe
                        from Nike. They are super-resistant to various shock
                        loads and honestly protect the human feet. This model of
                        sneaker for practicing various sports.
                      </li>
                      <li className="detail__list">
                      The sneaker has impeccable maximum cushioning, which
                        allows you to feel comfortable all day long.
                      </li>
                      <li className="detail__list">
                         Moreover,
                        mesh inserts are located on the tongue, toe and shin,
                        which allow air to penetrate and circulate inside the
                        sneaker.
                      </li>
                      <li className="detail__list6">
                        <div className="eye">
                          <img src={eyeIcon} alt="" />
                          <span>123242</span>
                        </div>
                        <div className="eye">
                          <img src={calenderIcon} alt="" />
                          <span>24 aug 2020 </span>
                        </div>
                        <div className="eye">
                          <img src={twimojeIcon} alt="" />
                          <span>#12345678</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="profile__main">
                <div className="profile__section">
                  <div className="profile__card">
                    <div className="price">
                      <span>$ 200000</span>
                      <div className="share">
                        <img src={heartProfile} alt="" />
                        <img src={shareProfile} alt="" />
                      </div>
                    </div>
                    <span className="price_p">price is negotable</span>
                    <hr />
                    <div className="profile">
                      <img src={profile} alt="" />
                      <div className="profile__detail">
                        <div className="name_badge">
                          <span>John Doe</span>
                          <img src={check} alt="" />
                        </div>
                        <span className="account">personal Account</span>
                        <div className="profile__rating">
                          <span>5.0</span>
                          <img src={star} alt="" />
                        </div>
                      </div>
                    </div>
                    <button className="profile__button">View Profile</button>

                    <div className="profile__email">
                      <img src={profileEmail} alt="" />
                      <div className="whatsapp__info">
                        <span>email</span>
                        <p>view email</p>
                      </div>
                    </div>
                    <div className="profile__phone">
                      <img src={profilePhone} alt="" />
                      <div className="phone__info">
                        <span>phone number</span>
                        <p>view Mobile Number</p>
                      </div>
                    </div>
                    <div className="profile__whatsapp">
                      <img src={profileWhatsapp} alt="" />
                      <div className="profile__info">
                        <span>whatsapp</span>
                        <p>chat</p>
                      </div>
                    </div>
                    <div className="profile__time">
                      <img src={profileTime} alt="" />
                      <div className="time__info">
                        <span>last time was on the site</span>
                        <p>Today</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="safety__main">
                  <div classname="safety__card">
                    <div className="safety__head">
                      <img src={safetyLogo} alt="" />
                      <span className="safe__heading">Safety Tip</span>
                    </div>
                    <div className="safety__details">
                      <ul>
                        <li className="list">
                          <BsDot className="dot" />
                          Don't send any pre payments
                        </li>
                        <li className="list">
                          <BsDot className="dot" />
                          Meet with the seller at a safe public place
                        </li>
                        <li className="list">
                          <BsDot className="dot" />
                          Inspect what you're going to buy to make sure it's
                          what you need
                        </li>
                        <li className="list">
                          <BsDot className="dot" /> Check all the docs and only
                          pay if you're satisfied
                        </li>
                        <li className="list">
                          <BsDot className="dot" /> Sobaar is not responsible if
                          any issue occurs
                        </li>
                      </ul>
                    </div>
                    <button className="report__button">
                      <img src={reportIcon} alt="" />
                      Report This Ad
                    </button>
                  </div>
                </div>

                <div className="location__main">
                  <div className="location__card">
                    <h5>Posted in</h5>
                    <div className="country__loc">
                      <img src={locationIcon} alt="" />
                      <span>Banaadir</span>
                    </div>
                    <div className="location__inner">
                      <img src={mapIcon} alt="" />
                      <img className="plain" src={plainIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDetails;
{/* <CarouselMain>
              <SlideLogo src={logo1} alt="" />
              <SlideHead>Product Engineering</SlideHead>
              <SlidePara>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                egestas elit diam etiam sit in consectetur nisl. Ultrices
                penatibus in orci ac ant.
              </SlidePara>
              <SlideSubHead>Product Archetechture</SlideSubHead>
              <SlideLink>Product Archetechture</SlideLink>
              <SlideLastHead>Product Archetechture</SlideLastHead>
            </CarouselMain>
            <CarouselMain>
              <SlideLogo src={logo2} alt="" />
              <SlideHead>UI UX Strategy</SlideHead>
              <SlidePara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in orci ac ant.</SlidePara>
              <SlideSubHead>Product Consultation</SlideSubHead>
              <SlideLink>Product Archetechture</SlideLink>
              <SlideLastHead></SlideLastHead>
            </CarouselMain>
            <CarouselMain>
              <SlideLogo src={logo3} alt="" />
              <SlideHead>Big Data & Analytics</SlideHead>
              <SlidePara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in orci ac ant.</SlidePara>
              <SlideSubHead>Effective Marketing</SlideSubHead>
              <SlideLink>Product Archetechture</SlideLink>
              <SlideLastHead></SlideLastHead>
            </CarouselMain> */}
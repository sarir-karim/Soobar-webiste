import React from "react";
// css link
import "./NavBar.css";
// dropdowns
import AllCategoryDD from "./DropDowns/AllCategoryDD";
import AnnounceDD from "./DropDowns/AnnounceDD";
import BikeDD from "./DropDowns/BikeDD";
import CarsDD from "./DropDowns/CarsDD";
import ElectronisDD from "./DropDowns/ElectronicsDD";
import JobjsDD from "./DropDowns/JobsDD";
import MobileDD from "./DropDowns/MobileDD";
import RealStateDD from "./DropDowns/RealStateDD";
import ServicesDD from "./DropDowns/ServicesDD";

// ICOSN
import { FaUsers } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import realestate from "./img/realstate.png";
import cars from "./img/cars.png";
import bikes from "./img/bikes.png";
import mobile from "./img/mobile.png";
import electronics from "./img/electronics.png";
import services from "./img/services.png";
import jobs from "./img/jobs.png";
import announcement from "./img/announcements.png";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__items">
        <div className="item">
          <div className="menu all__cate">
            <span>All Categories</span>
            <GoTriangleDown class="menu_icon" />
          </div>
        </div>
        <div className="item2">
          <div className="menu real__estate">
            <img src={realestate} alt="" />
            <span>Real Estate</span>
            <GoTriangleDown class="menu_icon" />
          </div>
        </div>
        <div className="item2">
          <div className="menu cars">
            <img src={cars} alt="" />
            <span>Cars</span>
            <GoTriangleDown class="menu_icon" />
          </div>
        </div>
        <div className="item2">
          <div className="menu bike">
          <img src={bikes} alt="" />
            <span>Bike</span>
            <GoTriangleDown class="menu_icon" />
          </div>
        </div>
        <div className="item2">
          <div className="menu mobiles">
            <img src={mobile} alt="" />
            <span>Mobile</span>
            <GoTriangleDown class="menu_icon" />
          </div>
        </div>
        <div className="item2">
          <div className="menu electronics">
            <img src={electronics} alt="" />
            <span>Electronics</span>
            <GoTriangleDown class="menu_icon" />
          </div>
        </div>
        <div className="item2">
          <div className="menu services">
            <img src={services} alt="" />
            <span>Services</span>
            <GoTriangleDown class="menu_icon" />
          </div>
        </div>
        <div className="item2">
          <div className="menu jobs">
            <img src={jobs} alt="" />
            <span>Jobs</span>
            <GoTriangleDown class="menu_icon" />
          </div>
        </div>
        <div className="item">
          <div className="menu announcements">
            <img src={announcement} alt="" />
            <span>Announcements</span>
            <GoTriangleDown class="menu_icon" />
          </div>
        </div>
        <div className="item">
          <div className="our__partners">
            <FaUsers class="partner__icon" />
            <h4>Our Partners</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

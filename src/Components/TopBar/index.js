import React from "react";

// topbar css
import "./TopBar.css";
// logo
import topLogo from "../../Pages/Images/HomeImages/favicon.png";
// Dropdown links
import LocationDD from "./DropDowns/LocationDD";
import LanguageDD from "./DropDowns/LanguageDD";
import SearchDD from "./DropDowns/SearchDD";

// icons
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiUser } from "react-icons/hi";

const TopBar = () => {
  return (
    <>
      <div className="topbar__container">
        <div className="topbar__dropdowns">
          <div className="dropdown">
            <div className="top__logo">
              <img src={topLogo} alt="topbar logo" />
            </div>
          </div>
          <div className="dropdown1">
            <LocationDD />
          </div>
          <div className="dropdown2">
            <SearchDD />
          </div>
          <div className="dropdown3">
            <div className="sell__container">
              <button>
                <IoIosAddCircleOutline className="sell__icon" /> Sell
              </button>
            </div>
          </div>
          <div className="dropdown4">
            <div className="login__container">
              <button>
                <HiUser className="login__icon" /> Login
              </button>
            </div>
          </div>
          <div className="dropdown5">
              <LanguageDD />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;

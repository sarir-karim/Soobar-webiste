import React from "react";
import "./FooterBottomStyles.css";

const FooterBottom = () => {
  return (
    <>
      <div className="footerBottom__container">
        <div className="bottom__items">
          <div className="item1">
            <h5>Site map</h5>
          </div>
          <div className="item2">
            <span>Copyright &© 2022,sobaar.com Powered by:</span>
            <a href="/">OMAYA Technologies</a>
          </div>
          <div className="item3">
            <h5>language:</h5>
            <select className="language__option">
              <option selected value="coconut">
                English
              </option>
              <option value="mango">Somalia</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;

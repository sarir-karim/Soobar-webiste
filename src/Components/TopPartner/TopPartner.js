import React from "react";
import "./ToP.css";
import Brands from "../Assets/Top_Partner_images/Logos/Brands.png";
import Brands1 from "../Assets/Top_Partner_images/Logos/Brands-1.png";
import Brands2 from "../Assets/Top_Partner_images/Logos/Brands-2.png";
import Brands3 from "../Assets/Top_Partner_images/Logos/Brands-3.png";
import Brands4 from "../Assets/Top_Partner_images/Logos/Brands-4.png";
import Brands5 from "../Assets/Top_Partner_images/Logos/Brands-5.png";
import Brands6 from "../Assets/Top_Partner_images/Logos/Brands-6.png";
import Brands7 from "../Assets/Top_Partner_images/Logos/Brands-7.png";
import Brands8 from "../Assets/Top_Partner_images/Logos/Brands-8.png";
import Brands9 from "../Assets/Top_Partner_images/Logos/Brands-9.png";
import Toppartner from "../Assets/Top_Partner_images/toppartner.png";

const TopPartner = () => {
  return (
    <div className="Top_Container">
      <div className="Top_Body">
        <div className="Top_heading">
          <h2>Our Top Partner</h2>
        </div>

        <div className="box_All">
          <div className="box_container">
            <div className="image_wrapper">
              <div className="Box">
                {" "}
                <img src={Brands} alt="" />{" "}
              </div>
              <b>DropBox</b>
            </div>
            <div className="image_wrapper">
              <div className="Box">
                <img src={Brands1} alt="" />
              </div>
              <b>Nike</b>
            </div>

            <div className="image_wrapper">
              <div className="Box">
                <img src={Brands2} alt="" />
              </div>
              <b>Slack</b>
            </div>
            <div className="image_wrapper">
              <div className="Box">
                <img src={Brands3} alt="" />
              </div>
              <b>Airab</b>
            </div>
            <div className="image_wrapper">
              <div className="Box">
                <img src={Brands4} alt="" />
              </div>
              <b>Google</b>
            </div>
          </div>

          <div className="box_container">
            <div className="image_wrapper">
              <div className="Box">
                <img src={Brands5} alt="" />
              </div>
              <b>Uber</b>
            </div>

            <div className="image_wrapper">
              <div className="Box">
                <img src={Brands6} alt="" />
              </div>
              <b>Procter & gamble</b>
            </div>

            <div className="image_wrapper">
              <div className="Box">
                <img src={Brands7} alt="" />
              </div>
              <b>Stripe</b>
            </div>

            <div className="image_wrapper">
              <div className="Box">
                <img src={Brands8} alt="" />
              </div>
              <b>Adidas</b>
            </div>

            <div className="image_wrapper">
              <div className="Box">
                <img src={Brands9} alt="" />
              </div>
              <b>Balenciaga</b>
            </div>
          </div>
        </div>
        <div className="topPrtnrBtn">
        <button>See All</button>
        </div>

      </div>
      <div className="Classify_app_container">
        <img src={Toppartner} alt="" />
      </div>
    </div>
  );
};

export default TopPartner;

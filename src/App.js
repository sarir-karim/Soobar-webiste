import "./App.css";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// navbar
import TopBar from "./Components/TopBar/index";
import Navbar from "./Components/Navbar/index";
import Carousel from "./Components/Carousel/BootstrapCarousel";
import Popular from "./Components/PopularCategories/Popular";
import  Footer from './Components/Footer/Footer'
import FreshAds from "./Components/FreshAdsSection/FreshAds";
import Electronics from "./Components/ElectronicsSection/Electronics";
import Vehicles from "./Components/VehiclesSection/Vehicles";
import FooterBottom from './Components/Footer/FooterBottom'
import TopPartner from './Components/TopPartner/TopPartner' 
import Btn from './Components/Btn'
import PopularDetails from "./Components/PopularCategoryDetails";

function App() {
  return (
    <>
      <div class="app">
      <TopBar />
      <Navbar />
      {/* <PopularDetails/> */}
      <Carousel />
      <Popular/>
      <FreshAds />
      <Electronics />
      <Vehicles />
      <Electronics />
      <Electronics />
      <Btn/>
      <TopPartner/>
      <Footer/>
      <FooterBottom/>
      </div>
    </>
  );
}


export default App;

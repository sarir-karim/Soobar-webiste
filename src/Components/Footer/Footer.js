import React from 'react';
// css
import './FooterStyles.css'
// icons
import {FaFacebookF} from 'react-icons/fa';
import {FaPaperPlane} from 'react-icons/fa';
import {AiFillYoutube} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {RiSnapchatLine} from 'react-icons/ri';
import {FiTwitter} from 'react-icons/fi';
import {FaTiktok} from 'react-icons/fa';
// footer logo
import footerLogo from '../../Pages/Images/HomeImages/favicon.png'
import qrcode from './img/qr-code.png';
import googleplay from './img/googleplay.png'
import applestore from './img/applestore.png'
import whatsapp from './img/whatsapp.png';
import call from './img/call.png';
import gmail from './img/gmail.png';
import location from './img/location.png';
const Footer  = () =>{
    return(
        <>
        <div className="footer__container">
            <div className="footer__items">
                <div className="footer__social foot1">
                    <img src={footerLogo} alt="footer logo" />
                        <h4>Find Anything!</h4>
                        <div className="social__icons">
                            <p>Follow us on</p>
                            <div className="icon1">
                            <i><FaPaperPlane className="icns"/></i>
                            <i><AiFillYoutube className="icns"/></i>
                            <i><FaFacebookF className="icns"/></i>
                            <i><BsInstagram className="icns"/></i>
                            </div>
                            <div className='icon2'>
                            <i><BsWhatsapp className="icns"/></i>
                            <i><RiSnapchatLine className="icns"/></i>
                            <i><FiTwitter className="icns"/></i>
                            <i><FaTiktok className="icns"/></i>
                            </div>
                            
                        </div>
                </div>
                <div className="overview foot2">
                    <ul>
                        <li className='first'>Overview</li>
                        <li>Our Partners</li>
                        <li>How to Sell</li>
                        <li>How to Buy</li>
                        <li>Support Center</li>
                    </ul>
                </div>
                <div className="company foot2">
                    <ul>
                        <li className='first'>Company</li>
                        <li>About us</li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="legal__policies foot2">
                    <ul>
                        <li className='first'>Legal Policies</li>
                        <li>Term of Services</li>
                        <li>Privicy Policy</li>
                        <li>Cookies Policy</li>
                        <li>Disclaimer Policy</li>
                        <li>Billing Policy</li>
                    </ul>
                </div>
                <div className="contact__us foot2">
                    <ul>
                        <li className='first'>Contact us</li>
                        <li > <i > <img src={call} alt="call" className='cntct'/></i> 161549651325</li>
                        <li><i> <img src={whatsapp} alt="whatsapp" className='cntct'/></i>161549651325</li>
                        <li><i> <img src={gmail} alt="gmail" className='cntct'/></i>info@gmail.com</li>
                        <li><i> <img src={location} alt="locaiton" className='cntct'/></i>k4m, Magharen, Somalia</li>
                        
                    </ul>
                </div>
                <div className="download__app foot1">
                        <li className="first">Download App</li >
                    <ul>
                        <div>
                            <li> <img className='app_store' src={googleplay} alt="google play"/> </li>
                            <li> <img className='qr_code' src={qrcode} alt="qr code"/> </li>
                            
                        </div>
                        <div>
                        <li> <img className='app_store' src={applestore} alt="google play"/> </li>
                        <li> <img className='qr_code' src={qrcode} alt="qr code"/> </li>
                        </div>
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer
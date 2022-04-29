import React from "react";
import './offer.css'
import './freesample.css'

 
function Offer() {
  return (
    <div className="c-main-container">
      <div className="c-free-sample lato-font c-header">Get in touch with me.</div>
      {/*<video width="700" height="240" autoPlay loop muted>
        <source src="/mixing-clip-full.mp4" type="video/mp4" />
  </video>*/}
      <div className="c-free-sample lato-font">I offer free samples for every service - check THIS menu tab. If you have any question feel free to contact me:</div>
      <div className="c-contact lato-font"> 
        <div><b>Email:</b> support@kalinekmusic.com</div>
        <div><b>Instagram:</b> ka_linek</div>
      </div>
      <div className="c-services">
        <div className="c-offer-container">
          <div className="lato-font c-service-title-pane">MIX/MASTER</div>
          <div className="lato-font c-service-pane">
            <ul>
              <li className="li-light">UP TO 5 STEMS - 10$</li> 
              <li className="li-light">UP TO 15 STEMS - 30$</li>
              <li className="li-light">UP TO 30 STEMS - 40$</li>
              <li className="li-light">MORE - 50$</li>

            </ul>
          </div>
        </div>
        <div className="c-offer-container">
          <div className="lato-font c-service-title-pane">PRODUCTION</div>
          <div className="lato-font c-service-pane">
            I offer many production services: reamping, midi drums editing, guitars editing etc.
            <div>I can also add post-production elements to your music or create whole arrangement.</div>
            <b><div>Contact me for specific service and price.</div></b>
          </div>
        </div>
        <div className="c-offer-container">
          <div className="lato-font c-service-title-pane">PAYMENT</div>
          <div className="lato-font c-service-pane">
            Contact me to make an order. If you want to have secure payment, you can find me on fiverr. See my gigs HERE.
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Offer;
import React from "react";
import './offer.css'
import './freesample.css'

 
function FreeSample() {
    return (
      <div className="c-main-container">
        <div className="c-free-sample lato-font c-header">Receive free sample for every service. </div>
        <div className="c-free-sample lato-font">Submit your stems in the form and provide all the instructions in the box. Feel free to use the form for contact only.</div>
        <div className="c-form">
        <form>
        <textarea classname="c-instructions" placeholder="Shipping Address"/>
        <input type="file"/>
        </form>
        </div>
      </div>

    );
}
 
export default FreeSample;

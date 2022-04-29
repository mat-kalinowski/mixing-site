import React from "react";
import axios from 'axios';

import './offer.css'
import './freesample.css'

 
function FreeSample() {
  var uploadState = {state: ""};

  var getS3Url = async (dir, file, options) => {
    var url;
    const fileJSON = {name: dir + "/" + file.name};

    await fetch("http://localhost:5001/s3-url", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fileJSON)
    }, options).then(response => {
      return response.json();
    }).then(data => {
      url = data['s3-url'];
      console.log(data);
    });  

    alert(url);
    const response = await fetch(url, {method: 'PUT', body: file});
    console.log(`\nResponse returned by signed URL: ${await response.text()}\n`);     
  }

  var submitForm = function (e) {
    e.preventDefault();

    var file = document.getElementById("fname").files[0]

    var infoContent = [e.target.firstname.value + '\n', e.target.email.value + '\n', e.target.instructions.value + '\n'];
    var infoFile = new File(infoContent, "mix-info.txt", {
      type: "text/plain",
    });

    getS3Url("stems - " + file.name, infoFile);

    const options = {
      onUploadProgress : (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor( loaded * 100 / total );
        console.log(` ${loaded}kb of ${total}kb | ${percent}%`);
      }
    }

    getS3Url("stems - " + file.name, file, options);
  }

  return (
    <div className="c-main-container">
      <div className="c-free-sample lato-font c-header">Receive free sample for every service. </div>
      <div className="c-free-sample lato-font">Submit your stems in the form and provide all the instructions in the box. Feel free to use the form for contact only.</div>
      <div className="c-break-line"></div>
      <div className="c-form">

      <form onSubmit={submitForm} className="c-flex-container" action="/action_page.php">
        <div className="c-info-container">  
          <div className="c-file-brick">
              <label className="c-field-label" for="fname">Stems</label>
              <input className="c-file-input" type="file" id="fname" name="stems"/>
          </div>
          <div className="c-format-brick">
              <label className="c-field-label" for="fname">Format</label>
              <div className="c-format-style">Stems packed in one ZIP file. All tracks aligned to the song start.</div>
          </div>
        </div>
        <div className="c-info-container">
          <div className="c-info-brick">
            <label className="c-field-label" for="fname">First Name / Nickname</label>
            <input type="text" id="fname" name="firstname"/>
          </div>
          <div className="c-info-brick">
            <label className="c-field-label" for="lname">Email (or other way to send you the sample)</label>
            <input type="text" id="lname" name="email" />
          </div>
        </div>
        <div className="c-info-brick">
            <label className="c-field-label" for="fname">Service instructions</label>
            <textarea className="c-instruction-field" type="text" id="fname" name="instructions"/>
        </div>
        <input type="submit" value="Submit"/>
        <div className="c-progress-bar">
          { /*uploadPercentage > 0 && <ProgressBar now="uploadPercentage" active/>*/}
        </div>
      </form>
      </div>
    </div>
  );
}
 
export default FreeSample;

import React from "react";
import axios from 'axios';

import { useState } from 'react';
import { ProgressBar} from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";

import './offer.css'
import './freesample.css'

const recaptchaRef = React.createRef();
 
function FreeSample() {
  const [ uploadPercentage, setUploadPercentage ] = useState('');

  var getS3Url = async (dir, file, event, showProgress = false) => {
    var url;
    const fileJSON = {name: dir + "/" + file.name};

    var reqOptions = {
      headers: {
        'Content-Type': 'application/json'
      },
    };

    await axios.post("http://localhost:5001/s3-url", JSON.stringify(fileJSON), reqOptions).then(res => {
      url = res.data['s3-url'];
    })

    var s3ReqOptions = {}

    if (showProgress) {
      s3ReqOptions['onUploadProgress'] = (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor( loaded * 100 / total );

        if(percent < 100) {
          setUploadPercentage(percent)
        }
      }
    }

    await axios.put(url, file, s3ReqOptions).then( res => {
      if(showProgress) {
        setUploadPercentage(0);
        alert("Files uploaded successfully");
        event.target.reset();
      }
    });
  }

  function onChange(value) {
    console.log("hello");
    console.log("Captcha value:", value);
  }

  var uploadForm = async (e) => {
    var file = document.getElementById("fname").files[0]

    var infoContent = [e.target.firstname.value + '\n', e.target.email.value + '\n', e.target.instructions.value + '\n'];
    var infoFile = new File(infoContent, "mix-info.txt", {
      type: "text/plain",
    });

    if(file && file.size > 500000000) {
      alert("Maximum file size is 500MB.\n\nPlease upload file on service like Google Drive, Dropbox or WeTransfer. Then send me link in the instruction field. Thank you!");
      return;
    }

    try {
      getS3Url("stems - " + file.name, infoFile, e);
    }
    catch (e) {
      alert("Couldn't upload the files. Please try again or contact me via email!");
      return;
    }

    if(file) {
      try {
        getS3Url("stems - " + file.name, file, e, true);
      }
      catch (e) {
        alert("Couldn't upload the files. Please try again or contact me via email!");
        return;
      }
    }
  }
 
  var submitForm = async (e) => {
    e.preventDefault();
    console.log("hello changes");
    //const token = await recaptchaRef.current.executeAsync();
    await recaptchaRef.current.executeAsync();
    recaptchaRef.current.execute(); 
    await uploadForm(e);
    recaptchaRef.current.reset();
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
          { uploadPercentage > 0 && <ProgressBar now={uploadPercentage} label={`${uploadPercentage}`}/>}
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          onChange={onChange}
          size="invisible"
          sitekey="6Ldzh8UfAAAAAEA-uKs8cQC65voYB_tHY6OksaG0"
        />
      </form>
      </div>
    </div>
  );
}
 
export default FreeSample;

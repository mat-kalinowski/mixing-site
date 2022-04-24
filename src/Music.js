import React from "react";
import ReactPlayer from "react-player";
import { Col, Container, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';

import './music.css'
import './common.css'

const opts = {
  height: '170',
  width: '300',
  playerVars: {
    autoplay: 0,
  },
};
 
function Music() {
  return (

    <>
      <div className="home-container">
        <div className="c-music-container">
            <div className="c-title-pane">
              <h1 className="c-music-header">MY MUSIC</h1>
              <h4 className="c-subtitle">SAMPLES OF MY RECORDINGS</h4>
            </div>
            <div className="c-video-container">
               <YouTube className="c-video-brick" videoId="WqXI0ddP4-8" opts={opts}/>
               <YouTube className="c-video-brick" videoId="VIS6I5aiJ5k" opts={opts}/>
               <YouTube className="c-video-brick" videoId="2g811Eo7K8U" opts={opts}/>
            </div>
        </div>
        <div className="c-mixing-container">
          <div className="c-title-pane">
          </div>
          <div className="c-break-container">
            <div className="c-description">Music that I have recorded, produced, mixed and mastered. In case of covers, writting goes to the original authors.</div>
          </div>
        </div>
        <div className="c-mixing-container">
          <div className="c-title-pane">
          </div>
          <div className="c-break-container break-margin">
            <img className="HorizontalBreak" src="/break-horizontal-wide-border.png"/>
          </div>
        </div>
        <div className="c-mixing-container">
          <div className="c-title-pane">
            <h1 className="c-mixing-header c-music-header">CONTEST MIXING</h1>
            <h4 className="c-subtitle">SAMPLES OF MY MIXES/MASTERS</h4>
          </div>
          <div className="c-video-container">
            {/*
            <h7 className="c-mix-name">WE COULD BE HEROES - CONWAY</h7>
            <ReactPlayer
              url="https://www.dropbox.com/s/q17npuibjso2jf2/of%20mice%20and%20man%20-%20mosaic.mp3?raw=1"
              width="280px"
              height="50px"
              playing={false}
              controls={true}
              />*/}
            <ReactPlayer className="c-soundcloud-brick"
              url="https://soundcloud.com/user-210332570-274097494/we-could-be-heroes-conway"
              width="300px"
              height="160px"
              playing={false}
              controls={true}
            />
            <ReactPlayer className="c-soundcloud-brick"
              url="https://soundcloud.com/user-210332570-274097494/black-sabbath-paranoid-solo-cover"
              width="300px"
              height="160px"
              playing={false}
              controls={true}
            />
            <ReactPlayer className="c-soundcloud-brick"
              url="https://soundcloud.com/user-210332570-274097494/eternal-frequency-down2"
              width="300px"
              height="160px"
              playing={false}
              controls={true}
            />
          </div>
        </div>
        <div className="c-mixing-container">
          <div className="c-title-pane">
          </div>
          <div className="c-break-container">
            <div className="c-description-mixing">Mixes and Masters that I've made for the URM mixing contests.
            Writing, production, recording goes to the original authors.</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
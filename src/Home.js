import React from "react";

import './music.css'
import './common.css'
import './home.css'


function Home() {
  console.log(`window inner height: ${window.innerHeight}`);
  return (
    <div className="menu-container">
    <a className="optionBrick" href="#/music">
      <div className="c-home-button">MY WORK <span class="material-icons c-size-big">music_note</span></div>
      <div className="c-home-subtitle">Check music that I've recorded and my mixing & mastering work!</div>
      <span class="material-icons c-size-huge">keyboard_arrow_down</span>
    </a>
    <div className="vertBreakBorder"/>
    <a className="optionBrick" href="#/offer">
      <div className="c-home-button">OFFER <span class="material-icons c-size-big">description</span></div>
      <div className="c-home-subtitle">Have a look on the wide offer: mixing, mastering, production.</div>
      <span class="material-icons c-size-huge">keyboard_arrow_down</span>
    </a>
    <div className="vertBreakBorder"/>
    <a className="optionBrick" href="#/freesample">
      <div className="c-home-button">FREE TEST MIX <span class="material-icons c-size-big my-auto">album</span></div>
      <div className="c-home-subtitle">Submit your tracks through this website and receive free sample.</div>
      <span class="material-icons c-size-huge">keyboard_arrow_down</span>
    </a>
  </div>
  );
}


export function HomeResponsive() {
  console.log(`window inner height: ${window.innerHeight}`);
  return (
    <div className="menu-container">
    <a className="optionBrick" href="#/music">
      <div className="c-home-button">MY WORK <span class="material-icons c-size-big">music_note</span></div>
      <div className="c-home-subtitle">Check music that I've recorded and my mixing & mastering work!</div>
    </a>
    <div className="horBreakBorder"/>
    <a className="optionBrick" href="#/offer">
      <div className="c-home-button">OFFER <span class="material-icons c-size-big">description</span></div>
      <div className="c-home-subtitle">Have a look on the wide offer: mixing, mastering, production.</div>
    </a>
    <div className="horBreakBorder"/>
    <a className="optionBrick" href="#/freesample">
      <div className="c-home-button">FREE TEST MIX <span class="material-icons c-size-big my-auto">album</span></div>
      <div className="c-home-subtitle">Submit your tracks through this website and receive free sample.</div>
    </a>
  </div>
  );
}

export default Home;
import React from "react";

import {
  Route,
  Routes,
  NavLink
} from "react-router-dom";


import Music from "./Music";
import {MusicResponsive} from "./Music";
import Home from "./Home";
import {HomeResponsive} from "./Home"
import Offer from "./Offer";
import {OfferResponsive} from "./Offer";
import FreeSample from "./FreeSample";
import './index.css'
import './common.css'

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import useWindowDimensions from "./Responsive";

function ResponsiveWrapper() {

  // 0px  xs   600px  sm  960px lg   1280px xl  1920px
  const dimensions = useWindowDimensions();

  if(dimensions.width > 600) return (<DesktopMain/>);
  else return (<PhoneMain/>);
}

function DesktopMain()  {
  const location = useLocation();
  let backgroundStyles = "p-3 pb-0 text-center bg-image"

  if (location.pathname === "/") {
    backgroundStyles += " headerPhoto"
  }

  return (
    <>
      <div>
        <div className={backgroundStyles}>
          {location.pathname !== "/" && <VideoBackground/>}
          <Navbar className="justify-content-center align-items-center nav-custom" id="navMain" expand="sm">
            <Nav className="mr-auto">
              <Navbar.Brand className="ml-auto" href="/">
                  <img alt="" className="c-logo" src="/kalineklogo.png"/>
              </Navbar.Brand>
              <NavItem eventkey={1} href="/">
                <NavLink className="menuBrick" to="/">Home</NavLink>
              </NavItem>
              <NavItem eventkey={1} href="/">
                <NavLink className="menuBrick" to="/music">Music</NavLink>
              </NavItem>
              <NavItem eventkey={1} href="/">
                <NavLink className="menuBrick" to="/offer">Offer</NavLink>
              </NavItem>
              <NavItem eventkey={1} href="/">
                <NavLink className="menuBrick" to="/freesample">Free Sample</NavLink>
              </NavItem>
            </Nav>
          </Navbar>

      {location.pathname === "/" && <SubHeader textContent="MIX, MASTER AND PRODUCTION"/>}

      </div>
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/music" element={ <Music/> }/>
          <Route path="/offer" element={ <Offer/> }/>
          <Route path="/freesample" element={ <FreeSample/> }/>
        </Routes>
      </div>
      <div className="footerContainer">
        <span className="footer">KALINEK MUSIC ON </span>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCFpGgycyejLu6Fo7PQgPUGg"><img alt="" className="footerLogo" src="/yt-simple.png"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/kalinek?up_rollout=true"><img alt="" className="footerLogo fiverr" src="/fiverr.png"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ka_linek"><img alt="" className="footerLogo fiverr" src="/instagram.png"/></a>
        <div className="footerEmailInfo">support@kalinekmusic.com</div>
      </div>
    </>
    );
  }

  function PhoneMain()  {
    let backgroundStyles = "p-2 pb-0 text-center bg-image"

    return (
      <>
        <div>
          <div className={backgroundStyles}>
            <Navbar className="justify-content-center align-items-center nav-custom" id="navMain" expand="sm">
              <Nav className="mr-auto">
                <Navbar.Brand className="ml-auto" href="/">
                    <img alt="" className="c-logo" src="/kalineklogo.png"/>
                </Navbar.Brand>
              </Nav>
            </Navbar>
            <Navbar className="justify-content-center align-items-center nav-custom" id="navMain" >
              <Nav className="mr-auto">
                <NavItem eventkey={1} href="/">
                  <NavLink className="menuBrick" to="/">Home</NavLink>
                </NavItem>
                <NavItem eventkey={1} href="/">
                  <NavLink className="menuBrick" to="/music">Music</NavLink>
                </NavItem>
                <NavItem eventkey={1} href="/">
                  <NavLink className="menuBrick" to="/offer">Offer</NavLink>
                </NavItem>
                <NavItem eventkey={1} href="/">
                  <NavLink className="menuBrick" to="/freesample">Free Sample</NavLink>
                </NavItem>
              </Nav>
          </Navbar>
  
          </div>
          
            <Routes>
              <Route exact path="/" element={
              <>
                <div className="headerPhotoPhone">
                  <SubHeader textContent="MIX, MASTER AND PRODUCTION"/>
                </div>
                <HomeResponsive/>
              </>}/>
              <Route exact path="/music" element={
              <>
                <div className="headerPhotoPhone">
                  <SubHeader textContent="MY RECORDINGS AND MIXES"/>
                </div>
                <MusicResponsive/>
              </>}/>
              <Route path="/offer" element={
              <>
                <div className="headerPhotoPhone">
                  <SubHeader textContent="GET IN TOUCH WITH ME"/>
                </div>
                <OfferResponsive/>
              </>}/>
              <Route path="/freesample" element={
              <>
                <div className="headerPhotoPhone">
                  <SubHeader textContent="FREE SAMPLE FOR EVERY SERVICE"/>
                </div>
                <FreeSample/>
              </>}/>
            </Routes>
        </div>
        <div className="footerContainer">
        <span className="footer">KALINEK MUSIC ON </span>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCFpGgycyejLu6Fo7PQgPUGg"><img alt="" className="footerLogo" src="/yt-simple.png"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.fiverr.com/kalinek?up_rollout=true"><img alt="" className="footerLogo fiverr" src="/fiverr.png"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ka_linek"><img alt="" className="footerLogo fiverr" src="/instagram.png"/></a>
      </div>
      </>
      );
  }

  function SubHeader(props) {    
    return (
      <div className="c-align-center">
          <div className="serviceHeader">{props.textContent}</div>
      </div>
    )
  }

  function VideoBackground() {
    return (
      <div className="backgroundVideo">
      </div>
    )
  }

export default ResponsiveWrapper;

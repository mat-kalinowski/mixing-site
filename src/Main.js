import React, { Component } from "react";

import {
  Route,
  Routes,
  NavLink
} from "react-router-dom";


import Music from "./Music";
import Home from "./Home";
import Offer from "./Offer";
import FreeSample from "./FreeSample";
import './index.css'
import './common.css'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


function Main()  {
  const location = useLocation();
  let backgroundStyles = "p-3 pb-0 text-center bg-image"


  if (location.pathname == "/") {
    backgroundStyles += " headerPhoto"
  }

  return (
    <>
      <div>
        <div className={backgroundStyles}>
          {location.pathname != "/" && <VideoBackground/>}
          <Navbar className="justify-content-center align-items-center nav-custom" id="navMain" expand="sm">
            <Nav className="mr-auto">
              <Navbar.Brand className="ml-auto" href="/">
                  <img className="c-logo" src="/kalineklogo.png"/>
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

      {location.pathname == "/" && <SubHeader/>}

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
        <a target="_blank" href="https://www.youtube.com/channel/UCFpGgycyejLu6Fo7PQgPUGg"><img className="footerLogo" src="/yt-simple.png"/></a>
        <a target="_blank" href="https://www.fiverr.com/kalinek?up_rollout=true"><img className="footerLogo fiverr" src="/fiverr.png"/></a>
        <a target="_blank" href="https://www.instagram.com/ka_linek"><img className="footerLogo fiverr" src="/instagram.png"/></a>
      </div>
    </>
    );
  }
 
  function SubHeader() {    
    return (
      <div className="c-align-center">
          <div className="serviceHeader">MIX, MASTER AND PRODUCTION</div>
      </div>
    )
  }

  function VideoBackground() {
    return (
      <div className="backgroundVideo">

      </div>
    )
  }
export default Main;
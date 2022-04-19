import React, { Component } from "react";

import {
  Route,
  Routes,
  NavLink
} from "react-router-dom";


import Music from "./Music";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import './index.css'
import './common.css'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


function Main()  {
  const location = useLocation();

  return (
    <>
          {console.log(useLocation())}

          <div>
          <div className="p-3 pb-0 text-center bg-image headerPhoto">
          <Navbar className="justify-content-center align-items-center nav-custom" id="navMain" expand="sm">
            <Nav className="mr-auto">
              <Navbar.Brand className="ml-auto" href="/">
                  <img className="c-logo" src="/kalineklogo.png"/>
              </Navbar.Brand>
              <NavItem eventkey={1} href="/">
                <NavLink className="menuBrick" to="/music">Music</NavLink>
              </NavItem>
              <NavItem eventkey={1} href="/">
                <NavLink className="menuBrick" to="/stuff">Stuff</NavLink>
              </NavItem>
              <NavItem eventkey={1} href="/">
                <NavLink className="menuBrick" to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Navbar>

      {location.pathname == "/" && <SubHeader/>}

      </div>
      <div className="menu-container">
        <a className="optionBrick" href="https://www.w3schools.com/">
          <div className="c-home-button">MY WORK <span class="material-icons c-size-big">music_note</span></div>
          <div className="c-home-subtitle">Check music that I've recorded and my mixing & mastering work!</div>
          <span class="material-icons c-size-huge">keyboard_arrow_down</span>
        </a>
        <img className="vertBreak" src="/vertbreak.png"/>
        <a className="optionBrick" href="https://www.w3schools.com/">
          <div className="c-home-button">OFFER <span class="material-icons c-size-big">description</span></div>
          <div className="c-home-subtitle">Have a look on the wide offer: mixing, mastering, production.</div>
          <span class="material-icons c-size-huge">keyboard_arrow_down</span>
        </a>
        <img className="vertBreak" src="/vertbreak.png"/>
        <a className="optionBrick" href="https://www.w3schools.com/">
          <div className="c-home-button">FREE TEST MIX <span class="material-icons c-size-big my-auto">album</span></div>
          <div className="c-home-subtitle">Submit your tracks through this website and receive free sample.</div>
          <span class="material-icons c-size-huge">keyboard_arrow_down</span>
        </a>
      </div>
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/music" element={ <Music/> }/>
          <Route path="/stuff" element={ <Stuff/> }/>
          <Route path="/contact" element={ <Contact/> }/>
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
      <div className="">
          <div className="c-align-center">
              <h4 className="serviceHeader">Professional Mix, Master and Production</h4>
          </div>
      </div>
    )
  }
export default Main;
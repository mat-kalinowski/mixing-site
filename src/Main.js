import React, { Component } from "react";

import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import './index.css'
import './common.css'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, NavbarBrand } from 'react-bootstrap';

function Main()  {
      return (
        <HashRouter>
          <div>
            <Navbar className="justify-content-center align-items-center nav-custom" id="navMain" expand="sm">
              <Nav className="mr-auto">
                <Navbar.Brand className="ml-auto" href="/">
                    <img className="c-logo" src="/kalineklogo.png"/>
                </Navbar.Brand>
                <NavItem eventkey={1} href="/">
                  <NavLink className="menuBrick" to="/">Home</NavLink>
                </NavItem>
                <NavItem eventkey={1} href="/">
                  <NavLink className="menuBrick" to="/stuff">Stuff</NavLink>
                </NavItem>
                <NavItem eventkey={1} href="/">
                  <NavLink className="menuBrick" to="/contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
            <div className="p-3 text-center bg-image headerPhoto">
              <div className="mask mask-col">
                <div className="h-100 c-align-center">
                  <h4 className="mb-3 text-white">Professional Mix, Master and Production</h4>
                </div>
              </div>
            </div>
            <div className="content">
              <Routes>
                <Route exact path="/" element={ <Home/> }/>
                <Route path="/stuff" element={ <Stuff/> }/>
                <Route path="/contact" element={ <Contact/> }/>
              </Routes>
            </div>
          </div>
        </HashRouter>
      );
  }
 
export default Main;
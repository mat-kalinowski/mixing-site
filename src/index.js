import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.css';

import {HashRouter} from "react-router-dom";
 

const app = (<HashRouter><Main/></HashRouter>);

ReactDOM.render(app, document.getElementById("root"));
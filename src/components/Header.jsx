import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';
import Marquee from "react-fast-marquee"
import {Link} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Markee from "./Markee.jsx";
const Header = () => {
    return (
            <div className={"flex flex-col py-8 items-center"}>
                <img src={logo}/>
                <p className={"text-gray-400"}>Journalism Without Fear or Favour</p>
                <div>{moment().format('MMMM Do YYYY')}</div>
            </div>
    );
};

export default Header;
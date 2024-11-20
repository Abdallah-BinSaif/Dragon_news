import React from 'react';
import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className={"w-11/12 mx-auto"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default AuthLayout;
import React from 'react';
import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import RightAside from "../home/RightAside.jsx";
import LeftAside from "../home/LeftAside.jsx";
import Markee from "../components/Markee.jsx";
import Navbar from "../components/Navbar.jsx";

const MainLayout = () => {
    return (
        <div className={"w-11/12 mx-auto "}>
            <Header></Header>
            <Markee/>
            <Navbar/>
            <div className={"grid grid-cols-12"}>
                <RightAside></RightAside>
                <div className={"w-11/12 mx-auto col-span-6 p-2"}>
                    <h2 className={"font-bold text-xl mb-4"}>Dragon News Home</h2>
                    <Outlet></Outlet>
                </div>
                <LeftAside></LeftAside>
            </div>
        </div>
    );
};

export default MainLayout;
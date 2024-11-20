import React from 'react';
import Header from "../components/Header.jsx";
import Categories from "../components/all category/Categories.jsx";
import {Outlet} from "react-router-dom";
import LoginWith from "../components/login/LoginWith.jsx";
import FindUsOn from "../components/login/FindUsOn.jsx";
import QZone from "../components/login/QZone.jsx";

const MainLayout = () => {
    return (
        <div className={"w-11/12 mx-auto "}>
            <Header></Header>
            <div className={"grid grid-cols-12"}>
                <div className={"col-span-3 p-2"}>
                    <p>All Category</p>
                    <Categories></Categories>
                </div>
                <div className={"col-span-6 p-2"}>
                    Dragon News Home
                    <Outlet></Outlet>
                </div>
                <div className={"col-span-3 p-2 space-y-4"}>
                    <LoginWith></LoginWith>
                    <FindUsOn/>
                    <QZone/>
                </div>
            </div>
            MainLayout.jsx
        </div>
    );
};

export default MainLayout;
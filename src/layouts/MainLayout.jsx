import React from 'react';
import Header from "../components/Header.jsx";
import Categories from "../components/all category/Categories.jsx";
import {Outlet} from "react-router-dom";

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
                <div className={"col-span-3 p-2"}>Login With</div>
            </div>
            MainLayout.jsx
        </div>
    );
};

export default MainLayout;
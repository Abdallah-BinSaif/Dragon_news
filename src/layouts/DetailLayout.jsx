import React from 'react';
import Header from "../components/Header.jsx";
import RightAside from "../home/RightAside.jsx";
import {Outlet} from "react-router-dom";
import LeftAside from "../home/LeftAside.jsx";
import DetailsCard from "../components/DetailsCard.jsx";

const DetailLayout = () => {
    return (
        <div>
            <Header/>
            <div className={"grid grid-cols-12 w-11/12 mx-auto"}>
                <div className={"w-11/12 mx-auto col-span-9 p-2"}>
                    <h2 className={"font-bold text-xl mb-4"}>Dragon News Home</h2>
                    <DetailsCard/>
                </div>
                <LeftAside></LeftAside>
            </div>

        </div>
    );
};

export default DetailLayout;
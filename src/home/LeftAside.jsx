import React from 'react';
import LoginWith from "../components/login/LoginWith.jsx";
import FindUsOn from "../components/login/FindUsOn.jsx";
import QZone from "../components/login/QZone.jsx";

const LeftAside = () => {
    return (
        <aside className={"col-span-3 p-2 space-y-4"}>
            <LoginWith/>
            <FindUsOn/>
            <QZone/>
        </aside>
    );
};

export default LeftAside;
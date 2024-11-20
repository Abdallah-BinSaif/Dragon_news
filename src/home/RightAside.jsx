import React from 'react';
import Categories from "../components/all category/Categories.jsx";

const RightAside = () => {
    return (
        <aside className={"col-span-3 p-2"}>
            <h2 className={"font-bold text-xl mb-4"}>All Category</h2>
            <Categories></Categories>
        </aside>
    );
};

export default RightAside;
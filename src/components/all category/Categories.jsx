import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, []);

    return (
        <div className={"flex flex-col gap-4"}>
            {
                categories.map(singleCategory => <NavLink
                    to={`category/${singleCategory.category_id}`}
                    className={"bg-base-300 py-2 rounded-xl px-4"}
                    key={singleCategory.category_id}
                >{singleCategory.category_name}</NavLink>)
            }
        </div>
    );
};

export default Categories;
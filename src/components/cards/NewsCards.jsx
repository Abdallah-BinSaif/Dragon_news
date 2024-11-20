import React from 'react';
import {useLoaderData} from "react-router-dom";
import NewsCard from "./NewsCard.jsx";

const NewsCards = () => {

    const {data:news} = useLoaderData();
    console.log(news)
    return (
        <div className={"space-y-4"}>
            {
                news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}/>)
            }
        </div>
    );
};

export default NewsCards;
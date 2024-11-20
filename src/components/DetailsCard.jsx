import React from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";

const DetailsCard = () => {
    const navigate = useNavigate();
    const {data:news} = useLoaderData();
    console.log(news)
    const {title, details, category_id:cid, image_url} = news[0];

    const handleBack = () => {
        navigate(`/category/${cid}`)
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image_url}
                    alt={title}
                    className="rounded-xl"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <button onClick={handleBack} className="btn btn-primary">Back to this category</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
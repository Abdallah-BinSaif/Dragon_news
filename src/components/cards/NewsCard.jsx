import React from 'react';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';
import {Link} from "react-router-dom";

const NewsCard = ({news}) => {
    const {
        title,
        author: { name, published_date, img },
        image_url,
        rating,
        total_view,
        details,
    } = news;

    return (
        <div className="card bg-base-100 shadow-lg border">
            <div className="card-body">
                {/* Author Section */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <img
                            src={img}
                            alt="Author"
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="ml-3">
                            <p className="text-sm font-bold">{name}</p>
                            <p className="text-xs text-gray-500">{published_date}</p>
                        </div>
                    </div>
                    <div className="flex space-x-3 text-gray-400">
                        <button>
                            <FaBookmark className="w-5 h-5 hover:text-primary" />
                        </button>
                        <button>
                            <FaShareAlt className="w-5 h-5 hover:text-primary" />
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-semibold mb-2">{title}</h2>

                {/* Thumbnail */}
                <img
                    src={image_url}
                    alt="News"
                    className="w-full h-56 object-cover rounded-lg mb-4"
                />

                {/* Description */}
                <p className="text-lg text-gray-600">
                    {details.slice(0, 200)}...
                    <Link to={`/news/${news._id}`} className="text-primary font-semibold cursor-pointer"> Read More</Link>
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center text-yellow-500">
                        <FaStar className="w-5 h-5" />
                        <p className="text-sm font-semibold ml-1">{rating.number}</p>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <FaEye className="w-5 h-5" />
                        <p className="text-sm ml-1">{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
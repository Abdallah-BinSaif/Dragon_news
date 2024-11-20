import React from 'react';
import Marquee from "react-fast-marquee";
import {Link} from "react-router-dom";

const Markee = () => {
    return (
        <div className={"flex items-center gap-4 bg-base-300 p-3"}>
            <p className={"bg-red-400 px-3 py-1 text-white"}>Latest</p>
            <Marquee className={"space-x-10"} pauseOnHover={true} speed={30}>
                <Link to={"/news"}>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package
                    Yet</Link>
                <Link to={"/news"}>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package
                    Yet</Link>
                <Link to={"/news"}>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package
                    Yet</Link>
                <Link to={"/news"}> Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package
                    Yet</Link>
            </Marquee>
        </div>
    );
};

export default Markee;
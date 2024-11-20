import React from 'react';
import classroom from "../../assets/class.png"
import swim from "../../assets/swimming.png"
import play from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className={"bg-base-200 p-2 rounded"}>
            <h2 className={"font-bold text-xl"}>Q-Zone</h2>
            <div className={"space-y-4 mb-8 mt-4"}>
                <img className={"w-full"} src={swim}/>
                <img className={"w-full"} src={classroom}/>
                <img className={"w-full"} src={play}/>
            </div>

        </div>
    );
};

export default QZone;
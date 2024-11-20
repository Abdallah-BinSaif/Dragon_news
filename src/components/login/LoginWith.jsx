import React from 'react';

const LoginWith = () => {
    return (
        <div>
            <h2 className={"font-bold text-xl"}>Login With</h2>
            <div className={"w-full space-y-4 mb-8 mt-4"}>
                <button className={"btn btn-outline btn-info w-full"}>Log in with Google</button>
                <button className={"btn btn-outline w-full"}>Log in with Github</button>
            </div>
        </div>
    );
};

export default LoginWith;
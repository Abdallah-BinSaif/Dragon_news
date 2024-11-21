import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import {MdAccountCircle} from "react-icons/md";
import {AuthContext} from "../authContext/AuthProvider.jsx";

const Navbar = () => {
    const {user, signOutUser} = useContext(AuthContext)
    console.log(user)
    const lists = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/"}>About</NavLink></li>
        <li><NavLink to={"/"}>Career</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {lists}
                    </ul>
                </div>
                <a className=" text-xl">{user?.email}</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end text-xl gap-2">
                <MdAccountCircle></MdAccountCircle>

                {
                    user && user.email ? <button onClick={signOutUser} className={"px-4 py-2 bg-gray-800 text-white"}>Sign Out</button> : <Link to={"/auth/login"} className={"px-4 py-2 bg-gray-800 text-white"}>Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;
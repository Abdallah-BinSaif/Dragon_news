import React, {useContext} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {AuthContext} from "../../authContext/AuthProvider.jsx";

const Register = () => {

    const {createUser, setUser} = useContext(AuthContext)

    const navigate = useNavigate();
    const handleRegisterForm = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        console.log({name, photo, password, email})

        createUser(email,password).then(res=>{
            setUser(res.user)
            navigate("/")
        }).catch(err=>console.log(err.code))
    }
    return (
        <div className={"min-h-[100vh-10px] flex justify-center items-center"}>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                    <form onSubmit={handleRegisterForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                name="photo"
                                type="text"
                                placeholder="photo_url"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                            <p className="label-text-alt">Already have an account? <Link className={"underline"} to={"/auth/login"}>Login</Link>
                            </p>
                        </label>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;
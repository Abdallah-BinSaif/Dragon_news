import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../authContext/AuthProvider.jsx";

const Login = () => {
    const navigate = useNavigate();
    const {signInUser,setUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        signInUser(email, password).then((res)=> {
            setUser(res.user)
            navigate("/")
        }).catch(err => console.log(err))


    }

    return (
        <div className={"min-h-[100vh-10px] flex justify-center items-center"}>
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name={"email"}
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name={"password"}
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <p className="label-text-alt">New to this website? <Link className={"underline"} to={"/auth/register"}>Register</Link></p>
                            </label>
                        </form>

                    </div>
                </div>
        </div>
    );
};

export default Login;
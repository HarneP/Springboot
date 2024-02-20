
import React from 'react'
import { Footer } from "../components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import User from '../models/user';
import {  useNavigate } from 'react-router-dom';
import authenticationService from '../services/authentication.service';
import {toast} from 'react-toastify';
import './Registerpage.css';


const Register = () => {
    const [user, setUser] = useState(new User('', '', '', '', '', '', ''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!user.firstName || !user.lastName || !user.password || !user.email || !user.role) {
            return;
        }

        setLoading(true);

        if (user.role === 'ADMIN') {
            const adminKey = prompt('Enter secret key for admin registration:');

            if (adminKey !== '1313') {
                setErrorMessage('Invalid admin key');
                setLoading(false);
                return;
            }
        }

        authenticationService.register(user)
            .then(() => {
                toast.success("User Registered Successfully", { autoClose: 1500 });
                navigate('/login');
            })
            .catch((error) => {
                toast.error(`${error.response.data}`, { autoClose: 1500 });
                console.log(error.response.data);
                if (error?.response?.status === 409) {
                    setErrorMessage('Email already exists!!!');
                } else {
                    setErrorMessage(error.errorMessage);
                }
                setLoading(false);
            });
    };

    return (
        <>
        
          <div class="container my-3 py-3" style={{backgroundColor: "grey"}}>
    <div class="row my-8 h-100">
        <div class="col-md-8 col-lg-8 col-sm-8 mx-auto">
            
            
            {errorMessage && (
                <div class="alert alert-danger">
                    {errorMessage}
                </div>
            )}
        </div>
           <h1 className="text-center" style={{color: "Teal", backgroundColor: "black"}}>REGISTER</h1>
        <div class="col-md-8 col-lg-8 col-sm-8 mx-auto">
            <form onSubmit={(e) => handleRegister(e)} class="my-form" style={{backgroundColor: " #008080"}}>
                <div class="form-group" >
                    <label for="FName" style={{color: "#000"}}>First Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="FName"
                        name="firstName"
                        value={user.firstName}
                        placeholder="First Name"
                        minLength={4}
                        maxLength={20}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div class="form-group">
                    <label for="LName" style={{color: "#000"}}>Last Name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="LName"
                        name="lastName"
                        value={user.lastName}
                        placeholder="Last Name"
                        minLength={4}
                        maxLength={20}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="Email" style={{color: "#000"}}>Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="Email"
                        name="email"
                        value={user.email}
                        placeholder="user@example.com"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="Password" style={{color: "#000"}}>Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="Password"
                        pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g" //Copy From Backend
                        name="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="Role" style={{color: "#000"}}>Role</label>
                    <select
                        class="form-control"
                        id="Role"
                        name="role"
                        value={user.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="" >-- select role --</option>
                        <option value="CUSTOMER">CUSTOMER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="Mobile Number" style={{color: "#000"}}>Mobile Number</label>
                    <input
                        type="text"
                        class="form-control"
                        id="mobile"
                        name="mobileNumber"
                        minLength={10}
                        maxLength={10}
                        value={user.mobileNumber}
                        placeholder="Mobile Number"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div class="my-3" >
                    <p style={{color: "#000"}}>
                       <b>Already have an account?</b>  <a href="/login" class="text-decoration-underline text-info">Login</a>
                    </p>
                </div>
                <div class="text-center">
                    <button class="my-2 mx-auto btn btn-primary" type="submit" style={{backgroundColor: "#4169E1"}}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
            <Footer />
        </>
    )
}

export default Register
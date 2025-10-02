import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth';
import { toast } from "react-toastify";


const Register = () => {
    const [User, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });


    const navigate = useNavigate()
    const { storeTokenInLS } = useAuth();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...User,
            [name]: value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(User)
        try {
            const response = await fetch(`http://localhost:8000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(User),
            });

            // once submit the data input field is blank
            const res_data = await response.json();
            console.log("Response from server", res_data.extraDetails);
            if (response.ok) {
                toast.success("Registration Successfull");
                storeTokenInLS(res_data.token)
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""
                })
                navigate("/")
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
        } catch (error) {
            console.log("Register", error)
        }
    }
    return (
        <div className='section-registraion text-white w-[75%] m-auto'>
            <div className='two-parts flex  items-center mt-10 w-[90%] m-auto gap-20'>
                <div className="registration-img w-[50%]">
                    <img src="../../images/register.png" alt="register" width={435} />
                </div>
                <div className="registration-img w-[50%]">
                    <h1 className='font-semibold text-5xl mb-10'>Registration From</h1>
                    <form action="" onSubmit={handleSubmit} className='space-y-5'>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">Username</label>
                            <input placeholder='Enter your name' className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm ' value={User.username} onChange={handleInput} type="text" name="username" id="username" required autoComplete='off' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">Email</label>
                            <input placeholder='Enter your email' className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm' value={User.email} onChange={handleInput} type="email" name="email" id="email" required autoComplete='off' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">Phone</label>
                            <input placeholder='Enter Phone' className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm' value={User.phone} onChange={handleInput} type="number" name="phone" id="phone" required autoComplete='off' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">Password</label>
                            <input placeholder='Enter Password' className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm' value={User.password} onChange={handleInput} type='password' name="password" id="password" required autoComplete='off' />
                        </div>
                        <button type='submit' className='bg-[#646cff] text-white rounded-md mt-5 py-2 px-5 cursor-pointer'>Register Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register

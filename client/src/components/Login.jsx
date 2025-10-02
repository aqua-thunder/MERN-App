import { useState } from "react";
import React from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Login = () => {
  const [User, setUser] = useState({
    email: "",
    password: ""
  })
  const navlink = useNavigate();
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
    try {
      const response = await fetch(`http://localhost:8000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(User)
      });
      const res_data = await response.json();


      if (response.ok) {
        toast.success("Login Successfull");
        storeTokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        })
        navlink("/")
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      toast.error("error");
    }
  }
  return (
    <div className='section-registraion text-white '>
      <div className='two-parts flex  items-center mt-10 w-[70%] m-auto '>
        <div className="registration-img w-[50%]">
          <img src="../../images/login.png" alt="register" width={380} />
        </div>
        <div className="registration-img w-[50%]">
          <h1 className='font-semibold text-5xl mb-10'>Login From</h1>
          <form action="" onSubmit={handleSubmit} className='space-y-5'>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="">Email</label>
              <input placeholder="Enter your email" className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm' value={User.email} onChange={handleInput} type="email" name="email" id="email" required autoComplete='off' />
            </div>
            <div className='flex flex-col space-y-2'>
              <label htmlFor="">Password</label>
              <input placeholder="Enter Password" className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm' value={User.password} onChange={handleInput} type='password' name="password" id="password" required autoComplete='off' />
            </div>
            <button type='submit' className='bg-[#646cff] text-white rounded-md mt-5 py-2 px-5 cursor-pointer'>Login Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

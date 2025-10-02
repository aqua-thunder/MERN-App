import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div className='w-[75%] m-auto'>
            <div className="container flex justify-between py-5">
                <div className="logo-brand ">
                    <a href="/" className='text-[#646cff]'>Ayush Mern</a>
                </div>
                <nav>
                    <ul className='space-x-9'>
                        <Link className='text-[#646cff] hover:text-white relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' to="/">Home</Link>

                        <Link className='text-[#646cff] hover:text-white relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' to="/about">About</Link>

                        <Link className='text-[#646cff] hover:text-white relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' to="/contact">Contact</Link>

                        <Link className='text-[#646cff] hover:text-white relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' to="/service">Service</Link>
                        {
                        isLoggedIn ?
                            <Link className='text-[#646cff] hover:text-white relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' to="/logout">Logout</Link> 
                            :
                            <>
                                <Link className='text-[#646cff] hover:text-white relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' to="/register">Register</Link>

                                <Link className='text-[#646cff] hover:text-white relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full' to="/login">Login</Link>
                            </>
                        }


                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar

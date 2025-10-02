import React from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../store/auth'

const About = () => {
  const {user}  = useAuth();
  return (
    <div className='w-[75%] m-auto'>
      <div className='flex gap-40 items-center mt-10'>
        <div className='text-white w-[50%] space-y-5'>
          <span>Wellcome {user ? user.username : ` to our website`}</span>
          <h1 className='text-4xl font-bold'>Why Choose Us?</h1>
          <div className='text-sm text-gray-300 space-y-10'>

            <p>Expertise: Our team consists of experenced IT professionals who are passionate about staying up-to-date with the latest industry trendss</p>
            <p>Customization: Our team consists of experenced IT professionals who are passionate about staying up-to-date with the latest industry trendss</p>
            <p>Customer-centric Approach: Our team consists of experenced IT professionals who are passionate about staying up-to-date with the latest industry trendss</p>
            <p>Affordability: Our team consists of experenced IT professionals who are passionate about staying up-to-date with the latest industry trendss</p>
            <p>Reliablity: Our team consists of experenced IT professionals who are passionate about staying up-to-date with the latest industry trendss</p>
          </div>

          <div className='space-x-5'>
            <Link to="/contact">
              <button type='submit' className='bg-[#646cff] text-white rounded-md mt-5 py-1 px-5 cursor-pointer'>Contact Now</button>
            </Link>
            <Link to="/service">
              <button type='submit' className='border border-[#646cff] text-white rounded-md mt-5 py-1 px-5 cursor-pointer bg-transparent'>Learn More</button>
            </Link>
          </div>
        </div>
        <div className='w-[50%]'>
          <img src="../../images/about.png" alt="" width={400} />
        </div>
      </div>
    </div>
  )
}

export default About

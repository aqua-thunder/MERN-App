import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-[75%] m-auto'>

      {/* First Section */}
      <div className='flex gap-40 items-center mt-10'>
        <div className='text-white w-[50%] space-y-5'>
          <span>We are the world best IT company</span>
          <h1 className='text-4xl font-bold'>Welcome to MERN Stack <br /> Course</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores in maxime velit iste inventore impedit repellat, nostrum dolorem dicta explicabo veritatis ipsum possimus corrupti magnam, quaerat quas rerum tenetur non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, voluptatibus!</p>
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
          <img src="../../images/home.png" alt="" width={355} />
        </div>
      </div>

      {/* Second Section */}
      <div className='bg-white rounded-md p-8 flex items-center justify-around my-28 text-black'>
        <div className='flex flex-col text-center space-y-2'>
          <span className='font-bold text-3xl'>50+</span>
          <span>Registered Companies</span>
        </div>
        <div className="line w-[1px] bg-black h-16"></div>
        <div className='flex flex-col text-center space-y-2'>
          <span className='font-bold text-3xl'>10,000+</span>
          <span>Happy Clients</span>
        </div>
        <div className="line w-[1px] bg-black h-16"></div>
        <div className='flex flex-col text-center space-y-2'>
          <span className='font-bold text-3xl'>500+</span>
          <span>Well Known Developers</span>
        </div>
        <div className="line w-[1px] bg-black h-16"></div>
        <div className='flex flex-col text-center space-y-2'>
          <span className='font-bold text-3xl'>24/7</span>
          <span>Service</span>
        </div>
      </div>

      {/* Third Section */}
      <div className='flex gap-40 items-center py-10'>
        <div className='w-[50%]'>
          <img src="../../images/design.png" alt="" width={355} />
        </div>
        <div className='text-white w-[50%] space-y-5'>
          <span>We are here to help you</span>
          <h1 className='text-4xl font-bold'>Get Started Today</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores in maxime velit iste inventore impedit repellat, nostrum dolorem dicta explicabo veritatis ipsum possimus corrupti </p>
          <div className='space-x-5'>
            <Link to="/contact">
              <button type='submit' className='bg-[#646cff] text-white rounded-md mt-5 py-1 px-5 cursor-pointer'>Contact Now</button>
            </Link>
            <Link to="/service">
              <button type='submit' className='border border-[#646cff] text-white rounded-md mt-5 py-1 px-5 cursor-pointer bg-transparent'>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

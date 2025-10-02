import React from 'react'
import { Link, useLocation, Outlet, Navigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import {useAuth} from "../../store/auth"

const AdminLayout = () => {
  const {user,isLoading} = useAuth();
  if(isLoading){ 
    return <h1>Loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/" />
  }
  const location = useLocation();
  const currentPath = location.pathname;
  const linkClasses = (path) =>
    currentPath === path
      ? 'text-white '
      : 'text-[#646cff] hover:text-white relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full';


  return (
    <>
      <div className="container w-[75%] m-auto my-10">
        <ul className='space-x-9 flex items-center'>
          <div className='flex items-center mt-7 gap-2'>
            <FaUser className='text-[20px] w-12' />
            <Link className={linkClasses('/admin/users')} to="/admin/users">Users</Link>
          </div>

          <div className='flex items-center mt-7 gap-2'>
            <IoIosContacts className='text-[25px] w-12' />
            <Link className={linkClasses('/admin/contacts')} to="/admin/contacts">Contacts</Link>
          </div>

          <div className='flex items-center mt-7 gap-2'>
            <MdMiscellaneousServices className='text-[28px] w-12' />
            <Link className={linkClasses('/admin/services')} to="/admin/services">Services</Link>
          </div>

          <div className='flex items-center mt-7 gap-2'>
            <FaHome className='text-[21px] w-12' />
            <Link className={linkClasses('/admin/home')} to="/admin/home">Home</Link>
          </div>

        </ul>
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout

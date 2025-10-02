import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact'
import Service from './components/service'
import Register from './components/register'
import Login from './components/login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Logout from './components/Logout'
import AdminLayout from './components/Layouts/AdminLayout'
import AdminUsers from './components/Admin-Users'
import AdminContact from './components/Admin-Contact'
import AdminUpdate from './components/Admin-Update'
function App() {

  return (
    <>
      <div className='dark:bg-[#111111] min-h-[100vh] text-white'>
        <div >
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />   
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Error />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="users" element={<AdminUsers />} />
                <Route path="contacts" element={<AdminContact />} />
                <Route path="users/:id/edit" element={<AdminUpdate />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App

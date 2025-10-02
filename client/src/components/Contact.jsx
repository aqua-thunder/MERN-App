import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../store/auth'
import { toast } from "react-toastify";


const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
}
const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData)
  const [userData, setUserData] = useState(true)

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    })
    setUserData(false)
  }
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/form/contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      });
      if (response.ok) {
        setContact(defaultContactFormData)
        const data = await response.json();
        toast.success("Message send successfully")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=''>
      <div className='section-registraion text-white w-[75%] m-auto'>
        <div className='two-parts flex  items-center mt-10 w-[90%] m-auto gap-20'>
          <div className="registration-img w-[50%]">
            <h1 className='font-semibold text-5xl mb-10'>Contact Us</h1>
            <img src="../../images/support.png" alt="register" width={300} />
          </div>
          <div className="registration-img w-[50%]">
            <form action="" onSubmit={handleSubmit} className='space-y-5'>
              <div className='flex flex-col space-y-2'>
                <label htmlFor="">Username</label>
                <input placeholder='Enter Username' className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm' value={contact.username} onChange={handleInput} type="text" name="username" id="username" required autoComplete='off' />
              </div>
              <div className='flex flex-col space-y-2'>
                <label htmlFor="">Email</label>
                <input placeholder='Enter your email' className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm' value={contact.email} onChange={handleInput} type="email" name="email" id="email" required autoComplete='off' />
              </div>
              <div className='flex flex-col space-y-2'>
                <label htmlFor="">Message</label>
                <textarea placeholder='Enter message' name="message" id="message" value={contact.message} onChange={handleInput} rows={7} required className='bg-[#3a3a3a] border-1 border-[gray] p-2 rounded-sm w-[29vw]'></textarea>
              </div>
              <button type='submit' className='bg-[#646cff] text-white rounded-md mt-5 py-2 px-5 cursor-pointer'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className='mt-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14771.885931390405!2d73.08559499801926!3d22.24116075598835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fb87e03b10aeb%3A0x3ceda32018c5dd51!2sPadra%2C%20Gujarat%20391440!5e0!3m2!1sen!2sin!4v1752389832358!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact

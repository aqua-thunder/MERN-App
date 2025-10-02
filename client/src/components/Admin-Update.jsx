import React, { useState, useEffect } from 'react'
import { useAuth } from '../store/auth';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";


const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: ""
    })
    const params = useParams();
    const { AuthorizationToken } = useAuth();
    const getSingleUserData = async () => {
        try {
            const response = await fetch(
                `http://localhost:8000/api/admin/users/${params.id}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: AuthorizationToken,
                    },
                }
            );
            const data = await response.json();
            console.log(`user single data ${data}`)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSingleUserData();
    }, [])

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData({
            ...data,
            [name]: value,
        })
    }
    // To update the data dynamically
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: AuthorizationToken,
                },
                body: JSON.stringify(data),
            },
            );
            if (response.ok) {
                toast.success("Update Successfull")
            } else {
                toast.error("Update Error!!!")
            }

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className='section-registraion text-white w-[75%] m-auto'>
            <div className='two-parts   items-center mt-10 w-[90%]'>
                <div className="registration-img w-[50%]">
                    <h1 className='font-semibold text-4xl mb-10'>Update User Data</h1>
                    <form action="" onSubmit={handleSubmit} className='space-y-5'>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">Username</label>
                            <input placeholder='Enter your name' className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm ' value={data.username} onChange={handleInput} type="text" name="username" id="username" required autoComplete='off' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">Email</label>
                            <input placeholder='Enter your email' className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm' value={data.email} onChange={handleInput} type="email" name="email" id="email" required autoComplete='off' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="">Phone</label>
                            <input placeholder='Enter Phone' className='bg-[#3a3a3a] border-1 border-[gray] w-[29vw] p-2 rounded-sm' value={data.phone} onChange={handleInput} type="number" name="phone" id="phone" required autoComplete='off' />
                        </div>

                        <button type='submit' className='bg-[#646cff] text-white rounded-md mt-5 py-2 px-5 cursor-pointer'>Register Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminUpdate

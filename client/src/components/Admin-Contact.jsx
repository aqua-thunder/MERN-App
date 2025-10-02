import React from 'react'
import { useState, useEffect } from 'react';
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminContact = () => {
    const { AuthorizationToken } = useAuth();
    const [ContactsData, setContactsData] = useState([])
    const getContactsData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/admin/contacts', {
                method: 'GET',
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            const data = await response.json()
            if (response.ok) {
                setContactsData(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const deleteContact = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/admin/contacts/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: AuthorizationToken,
                    }
                }
            );

            if (response.ok) {
                toast.success("Deleted Successfully");
                getContactsData();
            } else {
                console.log("Delete failed with status:", response.status);
                toast.error("Error deleting contact: " + errorMsg);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getContactsData();
    }, [])

    return (
        <div>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4 text-white">User Messages</h1>
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-[#646cff] to-purple-600 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">Username</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            <th className="py-3 px-6 text-left">Message</th>
                            <th className="py-3 px-6 text-center">Update</th>
                            <th className="py-3 px-6 text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-black">
                        {ContactsData.map((CurContactsData, index) => (
                            <tr key={index} className="hover:bg-gray-100 transition duration-300">
                                <td className="py-4 px-6">{CurContactsData.username}</td>
                                <td className="py-4 px-6">{CurContactsData.email}</td>
                                <td className="py-4 px-6">{CurContactsData.message}</td>
                                <td className="py-4 px-6 text-center">
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-3 rounded-full shadow-sm cursor-pointer">
                                        <Link to={`/admin/users/${CurContactsData._id}/edit`}>Edit</Link>
                                    </button>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-full shadow-sm cursor-pointer" onClick={() => deleteContact(CurContactsData._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminContact

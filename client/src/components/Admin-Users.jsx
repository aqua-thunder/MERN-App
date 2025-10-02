import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const { AuthorizationToken } = useAuth();
    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: AuthorizationToken,
                }
            });
            const data = await response.json();
            console.log(`users ${data}`);
            setUsers(data);
        } catch (error) {
            console.log(error)
        }
    }

    // Delete the user
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: AuthorizationToken,
                }
            });
            if (response.ok) {
                toast.success("Deleted Successfully");
                getAllUsersData();
            } else {
                console.log("Delete failed with status:", response.status);
                toast.error("Error deleting contact: " + errorMsg);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllUsersData();
    }, [])
    return (
        <div>
            <h2 className='font-bold text-2xl my-5'>Admin User Data</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-[#646cff] to-purple-600 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">Username</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">Phone</th>
                        <th className="py-3 px-6 text-center">Update</th>
                        <th className="py-3 px-6 text-center">Delete</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-black">
                    {users.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100 transition duration-300">
                            <td className="py-4 px-6">{item.username}</td>
                            <td className="py-4 px-6">{item.email}</td>
                            <td className="py-4 px-6">{item.phone}</td>
                            <td className="py-4 px-6 text-center">
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-1 px-3 rounded-full shadow-sm cursor-pointer">
                                    <Link to={`/admin/users/${item._id}/edit`}>Edit</Link>
                                </button>
                            </td>
                            <td className="py-4 px-6 text-center">
                                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-full shadow-sm cursor-pointer" onClick={() => { deleteUser(item._id) }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default AdminUsers

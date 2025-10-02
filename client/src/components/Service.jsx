import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {
  const { services } = useAuth();
  return (
    <div className="container mx-auto p-4 w-[75%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          Array.isArray(services) && services.map((item, index) => (
            <div key={index} className="card text-white border-2 border-gray-700 px-10 py-5 space-y-3 rounded-md">
              <img src="../../images/design.png" className='w-[20vw] m-auto' alt="design image" />
              <div className='flex justify-between'>
                <span>{item.provider || "Provider"}</span>
                <span>{item.price || "Price"}</span>
              </div>
              <div className='font-bold text-lg'>{item.service || "Service"}</div>
              <div>{item.description || "Description"}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Service

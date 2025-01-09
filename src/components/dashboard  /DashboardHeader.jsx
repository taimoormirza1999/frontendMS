import React from 'react'
import { Menu, Transition } from '@headlessui/react'; 
import { Fragment } from 'react';
import { FaUserCircle } from 'react-icons/fa';
function DashboardHeader({username,dropdownOpen, setDropdownOpen, handleLogout }) {
   
  return (
    <header className=" shadow-xl rounded-lg mx-2  py-1.5 bg-white  text-white my-1 ">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 ">
          <h1 className="text-lg md:text-xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-primaryBlue to-primaryPurple ">✦ Welcome Mr. {username} ✦ </h1>
          <div className="relative flex items-end md:items-center flex-col-reverse md:flex-row">
            <h3 className='text-sm md:text-base font-serif mx-3 font-semibold  text-indigo-600 '>@{username} </h3>
        
             <FaUserCircle className=" text-indigo-500 text-5xl cursor-pointer shadow-xl shadow-indigo-500 rounded-full mb-2"   onClick={() => setDropdownOpen(!dropdownOpen)} />
            {dropdownOpen && (
              <div className="relative shadow-2xl">
                <div className="absolute top-3 right-0 mt-6 w-52 bg-white rounded-md shadow-2xl shadow-indigo-400 px-1">
                  <ul className="py-1">
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 font-medium text-sm text-gray-700 hover:bg-red-600 hover:text-white rounded shadow"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
  )
}

export default DashboardHeader
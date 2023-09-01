/* eslint-disable no-unused-vars */
// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//     return (

//         <nav className="bg-white border-gray-200 dark:bg-gray-900">
//             <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 <a href="https://flowbite.com/" className="flex items-center">
//                     <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
//                     <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//                 </a>

//                 <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//                     <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                         <li>
//                             <NavLink
//                            to="/"
//                             className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ">
//                             Home
//                             </NavLink>
//                         </li>

//                         <li>
//                             <NavLink
//                            to="/about"
//                             className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ">
//                             About
//                             </NavLink>
//                         </li>

//                     </ul>
//                 </div>
//             </div>
//         </nav>

//     )
// }

// export default Navbar
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <nav className='flex justify-between items-center bg-[#0a192f] text-white w-full h-20 px-5 '>
            <h2 className='text-2xl font-normal '>navBAR.co</h2>

            <ul className='hidden md:flex gap-5'>
                <li className='text-xl font-normal '>
                    <NavLink
                        to="/"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ">
                        Home
                    </NavLink>
                </li>
                <li className='text-xl font-normal '>
                    <NavLink
                        to="/about"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ">
                        About
                    </NavLink>
                </li>
               
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!open ? <FaBars /> : <FaTimes />}
            </div>

            <ul className={open ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : "hidden"}>
                <li className='py-3 text-xl font-normal '>
                <NavLink
                        to="/"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ">
                        Home
                    </NavLink>
                </li>
                <li className="py-3 text-xl font-normal">
                <NavLink
                        to="/about"
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white ">
                        About
                    </NavLink>
                </li>
            
            </ul>
        </nav>
    )
}

export default Navbar
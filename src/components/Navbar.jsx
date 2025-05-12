import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import logo from '../images/logo.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // <div className='w-full bg-blue-300'>
    //      <Link to='/'>ИРА СЫЧ</Link> | <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
    // </div>
    <div className='text-black flex justify-between items-center font-main w-full px-4 h-20 relative z-10 bg-back'>
        <div className='items-center flex'>
            <div className='w-32 h-auto mr-2'>
                <Link to='/'>
                <img src={logo} alt="logo" />
                </Link>
            </div>
        </div>
        {/* Desktop */}
        <ul className='hidden md:flex'>
            <li className='p-4 text-xl cursor-pointer'>
                <Link to='/portfolio'>Портфолио</Link>
            </li>
            <li className='p-4 text-xl  cursor-pointer'>
                Прайсы
            </li>
            <li className='p-4 text-xl cursor-pointer'>
                <Link to={'/about'}> Обо мне </Link> 
            </li>
            <li className='p-4 text-xl cursor-pointer'>
                <Link to={'/contacts'}> Связаться </Link> 
            </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden ml-4 z-20">
          {!nav ? <MdMenu size={40} /> : <IoMdClose size={40} />}
        </div> 
        {/* Mobile */}
        <div className={` ${
          nav ? 'opacity-100 translate-y-0 pointer-events-auto': 'opacity-0 -translate-y-2 pointer-events-none'
        } left-0   w-full top-full  overflow-hidden absolute bg-white  flex flex-col transition-all items-center justify-center md:hidden ease-in-out duration-500 z-10`}>
          <hr className='bg-gray-200  w-full h-0.2'/>
            <ul className='flex flex-col items-center text-center p-4 text-black text-xl'>
            <li
            className="cursor-pointer hover:underline hover:underline-offset-4 underline-offset-2 decoration-gray-400 decoration-wavy transition-all duration-200"
          >
             <Link to={'/portfolio'}> Портфолио </Link>
            
          </li>
            <li
            className="cursor-pointer hover:underline hover:underline-offset-4 underline-offset-2 decoration-gray-400 decoration-wavy transition-all duration-200"
          >
            Прайсы
          </li>
            <li
            className="cursor-pointer hover:underline hover:underline-offset-4 underline-offset-2 decoration-gray-400 decoration-wavy transition-all duration-200"
          >
           <Link to={'/about'}> Обо мне </Link>
          </li>
            <li
            className="cursor-pointer hover:underline hover:underline-offset-4 underline-offset-2 decoration-gray-400 decoration-wavy transition-all duration-200"
          >
           <Link to={'/contacts'}> Связаться </Link>
          </li>
            </ul>
           <hr className='bg-gray-200 -mt-3 w-full h-0.2'/>
        </div>
    </div>
  )
}

export default Navbar
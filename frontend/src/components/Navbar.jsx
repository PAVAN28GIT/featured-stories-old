import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed w-full flex justify-between items-center h-20 pl-24 pt-2 mx-auto bg-[#000300] text-white z-50'>
            <h1 className='w-full text-3xl font-normal text-[#00df9a] font-montserrat'>FEATURED STORY</h1>
            {/* Display navigation links only on screens larger than md */}
            <ul className=' text-xl hidden md:flex pr-24'>
                <li className='p-4'>
                    <Link to="/">Home</Link>
                </li>
                <li className='p-4'>About</li>
            </ul>
            {/* Menu icon for mobile screens */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Sidebar */}
            <div className={`fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>FEATURED STORY</h1>
                {/* Display sidebar links only on mobile screens */}
                <ul className='pt-2 uppercase ms-4'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/" onClick={handleNav}>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/about" onClick={handleNav}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

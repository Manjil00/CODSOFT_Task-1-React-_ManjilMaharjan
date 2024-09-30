import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS
import { Link } from 'react-router-dom';


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
    <nav className="flex justify-between px-6 py-3 z-50 relative bg-bgcolor">
    <div className="flex justify-center items-center">
        <h1 className='text-white ml-6  text-sm md:text-4xl font-LogoFont
cursor-pointer flex justify-center items-center'>Manjil Maharjan</h1>

    </div>
    <div className={` absolute min-h-[30vh] left-0 top-[90%] w-full p-5 flex flex-col md:static md:flex md:min-h-fit md:w-auto gap-9 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
        <ul className=" cursor-pointer text-white flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-xl font-sans">
        <li className="hover:text-green-600">Introduction</li>
        <li className="hover:text-green-600">Project Showcase</li>
        <li className="hover:text-green-600">About Me</li>
        <li className="hover:text-green-600">Contact Info</li>
        </ul>
    </div>
    <div>
        <button onClick={toggleNavMenu} className="md:hidden">
            {
            isNavOpen ? <RxCross1 className="text-2xl text-white" /> :
            <RxHamburgerMenu className={`text-2xl text-white  ${isNavOpen ? 'hidden' : 'block'}`} />
            }
        </button>
    </div>
</nav>
)
}

export default Nav;
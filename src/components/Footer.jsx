import React from 'react'

//COMPONENTS
import Socials from '../components/Socials';

//ICONS
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";



const Footer = () => {
return (

    <div className="footer bg-bgcolor h-[100px] w-full flex justify-between items-center text-slate-500">
        <div className="left  w-full mx-20 ">
            <h1 className='flex justify-start items-center'><AiOutlineMail /> -
                manzilmaharjan00@gmail.com
            </h1>

            <h1 className='flex justify-start items-center '><LuPhone /> -
                +977-9864530504
            </h1>
        </div>

            <Socials/>
    </div>
)
}

export default Footer

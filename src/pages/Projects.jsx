import React from 'react'


//COMPONENTS
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Projects = () => {
return (
    <div className='mainContainer w-full h-auto bg-bgcolor'>
    <Nav/>

    <div className="Section1 w-full h-auto bg-bgcolor md:p-8 ">
        <div className="innerContainer bg-bgcolorlite mt-5 md:mt-0 h-auto w-full rounded-xl py-8 ">
            <h1 className="title text-orange-500 font-sans text-xl md:text-4xl font-bold ml-9 md:ml-14 ">PROJECT SHOWCASE</h1>

            <div className="projects h-auto w-full flex flex-col justify-evenly items-center gap-5 mt-5 md:mt-10 p-2">
                <div className="project1 rounded-xl bg-bgcolor h-auto w-full flex flex-row justify-between items-start">
                    <div className="words mt-3 md:mt-10">
                    <h1 className="title text-white ml-5 font-sans text-lg md:text-2xl font-bold">Ecommerce website for Nursery Firm</h1>
                    <p className=' text-white ml-5 font-sans text-xs md:text-lg mt-3'>Gajendra Nursery's e-commerce site, built with the MERN stack, features user authentication, a shopping cart,<br/>admin dashboard, and a responsive design for browsing and purchasing plants and services. It also includes <br/>a blog and supports gardening service bookings.</p>
                    </div>
                    <div className="imgpart  rounded-tr-xl rounded-br-xl h-[200px] w-[200px] md:h-[500px] md:w-[500px] bg-white flex flex-col justify-center items-center">
                        <div className="upperimg flex">
                        <img src='' className='h-[25%] w-[25%]' alt='pic'/>
                        <img src='' className='h-[25%] w-[25%]' alt='pic'/>
                        </div>
                    <div className="part2img flex">
                    <img src='' className='h-[25%] w-[25%]' alt='pic'/>
                    <img src='' className='h-[25%] w-[25%]' alt='pic'/>
                    </div>
                    </div>
                </div>

                <div className="project2 rounded-xl bg-bgcolor h-auto w-full flex flex-row justify-between items-start">
                <div className="imgpart  rounded-tl-xl rounded-bl-xl h-[200px] w-[200px] md:h-[500px] md:w-[500px] bg-white flex flex-col justify-center items-center">
                        <div className="upperimg flex">
                        <img src='' className='h-[25%] w-[25%]' alt='pic'/>
                        <img src='' className='h-[25%] w-[25%]' alt='pic'/>
                        </div>
                    <div className="part2img flex">
                    <img src='' className='h-[25%] w-[25%]' alt='pic'/>
                    <img src='' className='h-[25%] w-[25%]' alt='pic'/>
                    </div>
                    </div>

                    <div className="words mt-3 md:mt-10">
                    <h1 className="title text-white mr-5 font-sans text-lg md:text-2xl font-bold">Ecommerce website for Nursery Firm</h1>
                    <p className=' text-white mr-5 font-sans text-xs md:text-lg mt-3'>Gajendra Nursery's e-commerce site, built with the MERN stack, features user authentication, a shopping cart,<br/>admin dashboard, and a responsive design for browsing and purchasing plants and services. It also includes <br/>a blog and supports gardening service bookings.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <Footer/>
    </div>
)
}

export default Projects;

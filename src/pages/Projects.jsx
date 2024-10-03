import React from 'react'


//COMPONENTS
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Projects = () => {
return (
    <div className='mainContainer w-full h-full bg-bgcolor'>
    <Nav/>

    <div className="Section1 w-full h-[800px] bg-green-800 md:p-8 ">
        <div className="innerContainer bg-bgcolorlite mt-5 md:mt-0 h-[800px] w-full rounded-xl py-8 ">
            <h1 className="title text-orange-500 font-sans text-xl md:text-4xl font-bold ml-9 md:ml-14 ">PROJECT SHOWCASE</h1>

            <div className="projects h-auto w-full flex flex-col justify-evenly items-center gap-5 mt-10 bg-yellow-500 p-2">
                <div className="e-commerce bg-red-800 h-[200px] w-full flex flex-col md:flex-row justify-between items-center">
                    <div className="words">
                    <h1 className="title text-white ml-5 font-sans text-lg">Ecommerce website for Nursery firm.</h1>

                    </div>
                    <div className="imgpart h-[200px] w-[200px] flex flex-col justify-center items-center">
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

            </div>
        </div>
    </div>

    <Footer/>
    </div>
)
}

export default Projects;

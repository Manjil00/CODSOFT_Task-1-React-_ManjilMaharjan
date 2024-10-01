import React from 'react'
import Nav from '../components/Nav';


const Introduction = () => {
return (
<div className="main-container h-auto w-full ">
    <Nav/>

    <div className="Section1 w-full h-[800px] p-8  bg-bgcolor">
        <div className="innerContainer bg-bgcolor h-[800px] w-full">
            <div className="Sectiontext flex flex-col justify-center items-center">
                <h1 className='text-xs md:text-6xl font-bold text-start text-slate-500'>Hello, I'm <span className='text-orange-500'>Manjil Maharjan</span>
                <br/> And I'm a <span className='text-orange-500 '>Frontend Developer</span> </h1>
                <p className='mt-10 text-slate-500'>Transforming complex ideas into simple and sophisticated web visuals, leveraging React.js, 
                    <br/>seamless API integration, and intuitive UI design to create engaging and responsive user experiences. </p>
            </div>
        </div>

    </div>
</div>
)
}

export default Introduction;

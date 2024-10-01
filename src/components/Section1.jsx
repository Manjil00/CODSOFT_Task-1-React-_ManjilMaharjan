import React from 'react'

//Components
import Resume from '../components/Resume';
import Socials from '../components/Socials';

const Section1 = () => {
return (
    <div className="Section1 w-full h-auto p-8 bg-bgcolor">

    <div className="innerContainer bg-bgcolorlite rounded-xl h-[600px] w-full relative flex flex-col md:flex-row  ">
        <div className="text flex flex-col justify-start items-start ml-8 md:ml-44">
            <h1 className='text-2xl md:text-6xl font-bold text-start text-slate-500 mt-10'>Hello, I'm <span className='text-orange-500'>Manjil Maharjan</span>
            <br/> And I'm a <span className='text-orange-500 '>Frontend Developer</span> </h1>
            <p className='mt-10 text-slate-500 '>Transforming complex ideas into simple and sophisticated web visuals, leveraging React.js,
                <br/>seamless API integration, and intuitive UI design to create engaging and responsive user experiences. </p>
            <div className="ResumeANDSocials flex justify-between items-center gap-10 lg:gap-44">
            <Resume/>
            <Socials/>
            </div>

        </div>

        <div className="img">
        <img src='../images/pfpwhite.png' className='h-[200px] w-[150px]  lg:h-[300px] lg:w-[300px] xl:h-[450px] xl:w-[450px] rounded-full border-4 border-bgcolorlite absolute right-10 bottom-10 object-cover bg-opacity-30 ' alt='Pfp'/>
        </div>

    </div>


</div>
)
}

export default Section1

import React from 'react'

//COMPONENTS
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Aboutme = () => {
return (
    <div className='main-container w-full h-full bg-bgcolor md:p-8'>
    <Nav/>
    <div className="bodycontainer w-full h-auto ">
        <div className="innercontainer bg-bgcolorlite rounded-xl h-auto w-full " >
            <div className="me p-8">
            <h1 className="title font-bold text-orange-500 text-xl md:text-4xl ml-10  md:mt-5">ABOUT ME</h1>
            <p className='text-xs md:text-xl mt-5 md:mt-10 text-white'>I am a passionate tech enthusiast with a deep interest in web development, full-stack technologies, and building innovative digital solutions. I enjoy learning new tools and frameworks, continuously honing my skills to deliver high-quality projects. My curiosity and commitment to personal growth drive him to tackle challenges, whether in coding, design, or general problem-solving.<br/>
            <br/><span className='text-orange-500'>Professionally,</span> I have had some experience as a Social Media Manager and SEO Intern in Digipline Digital Agency, Australia but have not yet got any opportunity for frontend development feild. I am a React.js and frontend developer experienced in building web applications. I have developed SaaS products, e-commerce websites, and personal projects such as PodiumLive, a social audio app. With skills in React, Next.js, Redux, and API integration, I work on responsive designs, dynamic user interfaces, and seamless user experiences. I have experience in backend technologies like Prisma, Zod, Node and express.js and enjoy solving complex problems. Recently, I have been seeking an opportunity in Frontend Development position.   </p>
            </div>
        </div>
        <div className="certificates bg-bgcolorlite rounded-xl h-auto w-full p-3 md:mt-10 " >
        <h1 className="title font-bold text-orange-500 text-xl md:text-4xl ml-10 md:mt-10">CERTIFICATES</h1>
        <div className="certificate1 flex justify-between items-start mt-10 h-auto w-full">
            <div className="words p-2 ml-5 w-[200px] md:w-[900px] h-[300px] gap-5">
            <h1 className='text-xl md:text-2xl font-bold text-white'>7 Hour FullStack NextJs Bootcamp</h1>
            <p className="text-white text-xs md:text-lg font-sans font-normal break-words">The 7-hour Next.js bootcamp conducted by JoibSniper was an in-depth session aimed at providing participants with a comprehensive introduction to building full-stack web applications using Next.js. The bootcamp covered both frontend and backend development, focusing on essential tools and frameworks such as Prisma for database management and Zod for data validation and type safety. Attendees learned to create and deploy projects with Next.js, emphasizing key features like server-side rendering (SSR), static site generation (SSG), and API routes.</p>
            </div>
            <img src='../images/certificatesimg/nextjsBootcamp.png' className='bg-white h-[150px] w-[150px] md:h-[300px] md:w-[300px] mr-20' alt='certificates'/>
        </div>

        <div className="certificate1 flex justify-between items-start mt-10 h-auto w-full">
            <div className="words p-2 ml-5 w-[200px] md:w-[900px] h-[300px] gap-5">
            <h1 className='text-xl md:text-2xl font-bold text-white'>7 Hour FullStack NextJs Bootcamp</h1>
            <p className="text-white text-xs md:text-lg font-sans font-normal break-words">Learned zod Prisma in 7 hrsssssssasdasdsadsadsadsadsaasdasdadsdssddsdsdsdsdsdsddssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssxzcxzcxzcxzcxcxzcxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
            </div>
            <img src='../images/certificatesimg/nextjsBootcamp.png' className='bg-white h-[150px] w-[150px] md:h-[300px] md:w-[300px] mr-20' alt='certificates'/>
        </div>


        <div className="certificate1 flex justify-between items-start mt-10 h-auto w-full">
            <div className="words p-2 ml-5 w-[200px] md:w-[900px] h-[300px] gap-5">
            <h1 className='text-xl md:text-2xl font-bold text-white'>7 Hour FullStack NextJs Bootcamp</h1>
            <p className="text-white text-xs md:text-lg font-sans font-normal break-words">Learned zod Prisma in 7 hrsssssssasdasdsadsadsadsadsaasdasdadsdssddsdsdsdsdsdsddssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssxzcxzcxzcxzcxcxzcxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
            </div>
            <img src='../images/certificatesimg/nextjsBootcamp.png' className='bg-white h-[150px] w-[150px] md:h-[300px] md:w-[300px] mr-20' alt='certificates'/>
        </div>
        </div>

    </div>
    <Footer/>
    </div>
)
}

export default Aboutme;

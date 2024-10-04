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
            <h1 className="title font-bold text-orange-500 text-xl md:text-4xl ml-10  md:mt-5">About Me</h1>
            <p className='text-xs md:text-2xl mt-5 md:mt-10 text-white'>I am a passionate tech enthusiast with a deep interest in web development, full-stack technologies, and building innovative digital solutions. I enjoy learning new tools and frameworks, continuously honing my skills to deliver high-quality projects. My curiosity and commitment to personal growth drive him to tackle challenges, whether in coding, design, or general problem-solving.<br/>
            <br/><span className='text-orange-500'>Professionally,</span> I have had some experience as a Social Media Manager and SEO Intern in Digipline Digital Agency, Australia but have not yet got any opportunity for frontend development feild. I am a React.js and frontend developer experienced in building web applications. I have developed SaaS products, e-commerce websites, and personal projects such as PodiumLive, a social audio app. With skills in React, Next.js, Redux, and API integration, I work on responsive designs, dynamic user interfaces, and seamless user experiences. I have experience in backend technologies like Prisma, Zod, Node and express.js and enjoy solving complex problems. Recently, I have been seeking an opportunity in Frontend Development position.   </p>
            </div>
        </div>
        <div className="certificates bg-bgcolorlite rounded-xl h-auto w-full " >
        
        </div>

    </div>
    <Footer/>
    </div>
)
}

export default Aboutme;

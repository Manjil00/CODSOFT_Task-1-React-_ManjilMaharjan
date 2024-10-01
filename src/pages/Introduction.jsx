import React from 'react'
import Nav from '../components/Nav';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';





const Introduction = () => {
return (
<div className="main-container h-full w-full bg-bgcolor">
    <Nav/>
    <Section1/>
    <Section2/>
<div className="journey h-auto w-full p-8 bg-bgcolor">
    <div className="innerJourney bg-bgcolorlite w-full h-auto rounded-xl p-10">
    <h1 className="Journey text-sm lg:text-4xl text-orange-500 font-bold ">JOURNEY</h1>
    <p className='mt-10 text-slate-500 mx-10 text-sm md:text-xl tracking-wider'>I began my journey in web development with a strong focus on frontend technologies, particularly React.js. As I progressed, I honed my expertise in building dynamic and responsive web applications. I leveraged tools like Redux for efficient state management and Tailwind CSS for crafting streamlined, aesthetically pleasing user interfaces.<br/>
    <br/>

My passion for continuous learning eventually led me to explore full-stack development. I deepened my knowledge by working with technologies such as Next.js, which broadened my perspective on building scalable web solutions. I also delved into backend systems with tools like Prisma for database handling and Zod for data validation, allowing me to create robust, end-to-end solutions for web applications.

In addition to my development skills, I’ve had the opportunity to develop (SaaS) products, e-commerce platform and developing and maintaining its features that address complex  needs. <br/>
<br/>
I’ve also maintained a keen interest in digital marketing from my time as a Social Media Manager at Digipline Digital Agency in Australia. My marketing background complements my development skills, helping me understand how to create products that are both functional and aligned with user needs.<br/>
<br/>
With collaboration tools like Trello and Slack, I’ve developed strong organizational and project management habits, ensuring projects stay on track while maintaining high standards. Whether working independently or with teams, I strive to bring value to every project I take on, constantly adapting to new challenges and evolving with the ever-changing landscape of technology.</p>
    </div>

</div>

</div>
)
}

export default Introduction;

import React from 'react'

//Components
import Progress from '../components/progress';
import Techstack from '../components/Techstack';


const Section2 = () => {
return (
    <div className="Section2 h-auto w-full bg-bgcolor px-8 ">
    <div className="innercontainer2 bg-bgcolorlite h-auto w-full rounded-xl flex flex-col justify-start items-start ">
    <h1 className="tech text-sm lg:text-4xl text-orange-500 mt-20 ml-10 font-bold ">TECHNICAL PROFICENCY</h1>

    <div className="Progression bg-bgcolorlite h-[400px] w-full mt-20 flex justify-center items-start gap-5">
    <div className="UI/UX flex flex-col justify-between items-center p-2 mx-2 gap-10 font-bold">
            <h1 className="UI/UX text-xs md:text-2xl text-slate-500">UI/UX Technologies <br/><span className='font-normal'>(Figma)</span></h1>
            <h1 className="frontend text-xs md:text-2xl text-slate-500">Frontend Technologies <br/><span className='font-normal'>(React.js-Redux, Next.js)</span></h1>
            <h1 className="backend text-xs md:text-2xl text-slate-500">Backend Technologies <br/> <span className='font-normal'>(Prisma, Zod, Node.js, Express.js)</span></h1>
            <h1 className="database text-xs md:text-2xl text-slate-500">Database Platforms <br/> <span className='font-normal'>(myAQL, MongoDB)</span></h1>

        </div>
    
        <div className="frontend flex flex-col justify-between items-center p-2 mx-2  gap-16">
            <Progress percentage={95}/>
            <Progress percentage={95}/>
            <Progress percentage={60}/>
            <Progress percentage={55}/>
        </div>

        <div className="backend flex flex-col justify-between items-center p-2 mx-2  gap-16">
            <h1 className="num text-xs md:text-2xl text-slate-500">95%</h1>
            <h1 className="num text-xs md:text-2xl text-slate-500">95%</h1>
            <h1 className="num text-xs md:text-2xl text-slate-500">60%</h1>
            <h1 className="num text-xs md:text-2xl text-slate-500">55%</h1>
        </div>

    </div>
        <Techstack/>
    </div>
</div>
)
}

export default Section2

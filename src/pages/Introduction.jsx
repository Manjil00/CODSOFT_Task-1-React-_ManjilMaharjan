import React from 'react';

//COMPONENTS
import Journey from '../components/Journey';
import Nav from '../components/Nav';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Footer from '../components/Footer';



const Introduction = () => {
return (
<div className="main-container h-full w-full bg-bgcolor">
    <Nav/>
    <Section1/>
    <Section2/>
    <Journey/>
    <Footer/>

</div>
)
}

export default Introduction;

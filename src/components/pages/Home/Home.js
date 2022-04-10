import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Doctors from '../../Doctors/Doctors';
import Hero from '../../Hero/Hero';
import MobileApp from '../../MobileApp/MobileApp';
import Steps from '../../Steps/Steps';
import Partners from '../../Partners/Partners';
import Footer from '../../Footer/Footer';
import Responsibility from '../../Responsibility/Responsibility';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Steps />
            <Doctors />
            <MobileApp />
            <Responsibility />
            <Partners />
            <Footer />
        </div>
    )
}

export default Home
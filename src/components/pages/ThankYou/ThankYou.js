import React from 'react'
import Footer from '../../Footer/Footer'
import Navabar from '../../Navbar/Navbar'
import './thankyou.css'

export default function ThankYou() {
    return (
        <div className='wholePage'>
            <Navabar />
            <div className='pageHolder'>
                <div className='pageContainer'>
                    <div className='pageHeaderContainer'>
                        <h2 className='pageHeader'>Thank You....</h2>
                    </div>
                    <div className='thankyouText'>
                        <h2>Thank You for your interest towards us...</h2>
                        <h2>we will contact with you as fast as possible</h2>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

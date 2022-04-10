import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'
import ScrollDown from '../../assets/imgs/down.png'
import PlayIcon from '../../assets/imgs/play-icon.png'
import AppleIcon from '../../assets/imgs/apple-icon.png'

function Hero() {
    return (
        <div className='hero'>
            <div className="container section-header-wrapper">
                <h1 className='header-1'>Best Doctors <span>from</span><br />  Best Hospitals </h1>
                <p className="para-1">We  are solving one of the most fundamental global problem in Healthcare that is “Reach” & “Access” anywhere, anytime with any device.</p>


                <div className="dload-btns">
                    <div className="play-btn btn-dload">
                        <img src={PlayIcon} alt="" />
                        <div>
                            <span className='btn-text-normal'>Get it From</span>
                            <span className="btn-text-bold">Google Play</span>
                        </div>
                    </div>

                    <div className="apple-btn btn-dload">
                        <img src={AppleIcon} alt="" />
                        <div>
                            <span className='btn-text-normal'>Get it From</span>
                            <span className="btn-text-bold">Apple Store</span>
                        </div>
                    </div>

                </div>
            </div>

            <Link to="steps" spy={true} smooth={true}><img src={ScrollDown} alt="" className='scroll-down' /></Link>

        </div>
    )
}

export default Hero
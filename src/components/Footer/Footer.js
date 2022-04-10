import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
import FooterLogo from '../../assets/imgs/logo.png'
import FbIcon from '../../assets/imgs/fb.png'
import TwitterIcon from '../../assets/imgs/twitter.png'
import InstaIcon from '../../assets/imgs/insta.png'
import SendIcon from '../../assets/imgs/sendIcon.png'

function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src={FooterLogo} alt="" />
                        </div>


                        <div className="social-icons-container">
                            <div className='social-icon-wrapper'>
                                <img src={FbIcon} alt="" className='social-icon fb' />
                            </div>
                            <div className='social-icon-wrapper'>
                                <img src={TwitterIcon} alt="" className='social-icon' />
                            </div>
                            <div className='social-icon-wrapper'>
                                <img src={InstaIcon} alt="" className='social-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-links">
                            <div className="useful-links links">
                                <h4>Product</h4>
                                <ul>
                                    <li>
                                        <Link to='/'>What We Do</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Top Doctors</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Top Hospitals</Link>
                                    </li>
                                    <li>
                                        <Link to='/forDoctors'>For Doctors</Link>
                                    </li>
                                    <li>
                                        <Link to='/typesOfCare'>Types of Care</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="contact links">
                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <Link to='/'>Blog</Link>
                                    </li>
                                    <li>
                                        <Link to='/contact'>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to='/about'>About Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="footer-email">
                            <form>
                                <input type="text" name="" id="" onChange={handleEmailChange} placeholder='Email Address' />
                                <img src={SendIcon} alt="" className='send-icon' onClick={handleSubmit} />
                            </form>
                        </div> */}

                        <div className='footer-links-links'>
                            <ul>
                                <li>
                                    <Link to='/termsConditions'>Terms</Link>
                                </li>
                                <li>
                                    <Link to='/privacyPolicy'>Privacy</Link>
                                </li>
                            </ul></div>
                    </div>
                </div>
            </div>
            <div className="footer-btm">
                <p>© Copyright 2022. All Rights Reserved</p>
            </div>
            <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=34c02c2a-715e-4571-9314-a6b2e5e161f7"> </script>
        </footer>
    )
}

export default Footer
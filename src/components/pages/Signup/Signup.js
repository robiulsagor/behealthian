import React from 'react'
import Topbar from '../../Topbar/Topbar'
import './Signup.css'
import User from '../../../assets/imgs/userIcon.png'
import { Link, useLocation } from 'react-router-dom'
import Fbcolor from '../../../assets/imgs/fb-color.png'
import Googlecolor from '../../../assets/imgs/google-color.png'
import Twittercolor from '../../../assets/imgs/twitter-color.png'
import Footer from '../../Footer/Footer'
import Lock from '../../../assets/imgs/lockIcon.png'
import Unlock from '../../../assets/imgs/unlock.png'
import Phone from '../../../assets/imgs/phone.png'


const Signup = () => {
   
    return (
        <div>
            <div className='top'>
                <Topbar />
            </div>
            <div className='signup-gradient'>
                <div className='overlay-container'>
                    <div className="signup-ball signup-ball-1"></div>
                    <div className="signup-ball signup-ball-2"></div>
                    <div className="signup-ball signup-ball-3"></div>
                        
                    <div className="signup-ball signup-ball-4"></div>
                    <div className="signup-ball signup-ball-5"></div>
                    <div className="signup-ball signup-ball-6"></div>
                    <div className="signup-ball signup-ball-7"></div>
                    <div className="signup-ball signup-ball-8"></div>
                    <div className="signup-ball signup-ball-9"></div>
                    <div className="container signup-whole-container">
                        <div className="signup-container">
                            <h2>SIGN UP</h2>
                            <p className='heading-2'>Join 90,000+ top doctors for free today!</p>
                            <form>
                                <div className="input-flex-container">
                                    <div className="input-flex">

                                        <div className='form-group'>
                                            <label htmlFor="">Clinic/Hospital Name <span>*</span></label>
                                            <div className='inp-container'>
                                                <input type="text" name="" id="" placeholder='Enter email id' />
                                                <img src={User} alt="" className='inp-icon' />
                                            </div>
                                        </div>

                                        <div className='form-group'>
                                            <label htmlFor="">Username <span>*</span></label>
                                            <div className='inp-container'>
                                                <input type="text" name="" id="" placeholder='Enter Username' />
                                                <img src={User} alt="" className='inp-icon' />
                                            </div>
                                        </div>

                                        <div className='form-group'>
                                            <label htmlFor="">Password <span>*</span></label>
                                            <div className='inp-container'>
                                                <input type="text" name="" id="" placeholder='Enter password' />
                                                <img src={Unlock} alt="" className='inp-icon' />
                                            </div>
                                        </div>


                                    </div>
                                    <div className="input-flex">

                                        <div className='form-group'>
                                            <label htmlFor="">Contact person <span>*</span></label>
                                            <div className='inp-container'>
                                                <input type="text" name="" id="" placeholder='Enter password' />
                                                <img src={User} alt="" className='inp-icon' />
                                            </div>
                                        </div>

                                        <div className='form-group'>
                                            <label htmlFor="">Contact number <span>*</span></label>
                                            <div className='inp-container'>
                                                <input type="text" name="" id="" placeholder='Enter password' />
                                                <img src={Phone} alt="" className='inp-icon' />
                                            </div>
                                        </div>

                                        <div className='form-group'>
                                            <label htmlFor="">Phone no <span>*</span></label>
                                            <div className='inp-container input-split'>
                                                <div className='input-split-left'><span>+91</span></div>
                                                <input className='input-split-right' type="number" name="" id="" placeholder='Enter phone' />
                                                <img src={Phone} alt="" className='inp-icon' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-container">
                                    <p>Already a User? <Link to='/login' className='alt-link'>Log In</Link></p>
                                    <button className='submit-btn'>Sign UP</button>
                                </div>
                            </form>

                            <div className="alt-login-container">
                                <p className='alt-singin-text'>or sign in with</p>
                                <div className='login-icon-container'>
                                    <div className='icon-cont fb'><img src={Fbcolor} alt="" /></div>
                                    <div className='icon-cont'><img src={Googlecolor} alt="" /></div>
                                    <div className='icon-cont'><img src={Twittercolor} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup
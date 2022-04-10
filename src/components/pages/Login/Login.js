import React, { useState } from 'react'
import Footer from '../../Footer/Footer'
import Topbar from '../../Topbar/Topbar'
import './Login.css'
import PlayIcon from '../../../assets/imgs/play-icon.png'
import AppleIcon from '../../../assets/imgs/apple-icon.png'
import { Link } from 'react-router-dom'
import Lock from '../../../assets/imgs/lockIcon.png'
import Unlock from '../../../assets/imgs/unlock.png'
import Phone from '../../../assets/imgs/phone.png'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPass, setShowPass] = useState(false)

    // email validation
    const validateEmail = (email) => {
        email = email.trim()
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            // HANDLE SUMBIT EMAIL
            console.log("Valid email");
        } else {
            alert("Please provide Valid Email!")
        }
    }

    return (
        <div className='login'>
            <div className="top">
                <Topbar />
            </div>
            <div className='gradient'>
                <div className='overlay-container'>
                    <div className="ball ball-1"></div>
                    <div className="ball ball-2"></div>
                    <div className="ball ball-3"></div>
                    <div className="ball ball-4"></div>
                    <div className="ball ball-5"></div>
                    <div className="ball ball-6"></div> 
                    <div className="ball ball-7"></div>
                    {/* <div className="ball ball-8"></div> */}
                    {/* <div className="ball ball-9"></div> */}

                    <div className='flex-container-reverse container login-whole-body'>
                        <div className="section-half">
                            <div className="login-container">
                                <h2>LOG IN</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-group'>
                                        <label htmlFor="email">Email <span>*</span></label>
                                        <div className='inp-container'>
                                            <input type="email" name="emai" id="emai" placeholder='Enter email id' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                            <img src={Phone} alt="" className='inp-icon' />
                                        </div>

                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="password">Password <span>*</span></label>
                                        <div className='inp-container'>
                                            <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            <img src={showPass ? Unlock : Lock} alt="" className='inp-icon clickable' onClick={() => setShowPass(!showPass)} />
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <Link to='/' className='forget-link'>Forgot Password?</Link>
                                    </div>
                                    <div className="center-container">
                                        <p>New User? <Link to='/signup' className='alt-link'>Sign Up</Link></p>
                                        <button className='submit-btn'>Log In</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="section-half half-text-section">
                            <h2 className="header-huge">Your <span>doctor</span>, one tap away</h2>
                            <p className='huge-sub'>24/7 on-demand or by appointment with a doctor you choose</p>
                            <div className="app dload-btns">
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
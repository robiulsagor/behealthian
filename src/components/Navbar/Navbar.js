import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/imgs/logo.png'
import Hamburger from '../../assets/imgs/hamburger.png'
import TypesOfCareDropdown from '../Dropdown/TypesOfCareDropdown';
import LoginAsDropDown from '../Dropdown/LoginAsDropdown';
import SingupDropdown from '../Dropdown/SingupDropdown';
import { AppContext } from '../context/Context';


function Navabar() {
    const [isMenuOpen, setIsMenuOpen, typesDropdown, setTypesDropdown, loginDropdown, setLoginDropdown, signupDropdown, setSignupDropdown, handleNavMenu] = useContext(AppContext)

    const onMouseEnter = val => val(true)

    const onMouseLeave = val => val(false)

    return (
        <div className='navbar'>
            <div className="container navbar-container">
                <div className="nav-left">
                    <Link to='/'><img src={logo} alt="logo" className='logo' /></Link>
                </div>
                <div className='nav-right'>
                    <ul className={isMenuOpen ? 'list-menu' : 'list-menu'}>
                        <li>
                            <Link to='/' onClick={handleNavMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={handleNavMenu}>Resources</Link>
                        </li>

                        <li
                            onMouseEnter={() => onMouseEnter(setTypesDropdown)}
                            onMouseLeave={() => onMouseLeave(setTypesDropdown)} onClick={() => setTypesDropdown(!typesDropdown)} className=' relative'>  Types of Care <i className={typesDropdown ? "fa-solid fa-chevron-up ml-5 " : "fa-solid fa-chevron-down ml-5 "}></i>
                            {typesDropdown && <TypesOfCareDropdown />}
                        </li>

                        <li
                            onMouseEnter={() => onMouseEnter(setLoginDropdown)}
                            onMouseLeave={() => onMouseLeave(setLoginDropdown)}
                            onClick={() => setLoginDropdown(!loginDropdown)}
                            className=' relative'> Login <i className={loginDropdown ? "fa-solid fa-chevron-up ml-5 " : "fa-solid fa-chevron-down ml-5 "}></i>
                            {loginDropdown && <LoginAsDropDown />}
                        </li>

                        <li onMouseEnter={() => onMouseEnter(setSignupDropdown)} onMouseLeave={() => onMouseLeave(setSignupDropdown)}
                            onClick={() => setSignupDropdown(!signupDropdown)} className='relative'> Sign Up <i className={signupDropdown ? "fa-solid fa-chevron-up ml-5 " : "fa-solid fa-chevron-down ml-5 "}></i>
                            {signupDropdown && <SingupDropdown />}
                        </li>
                    </ul>

                </div>


                <div className="nav-btn" onClick={handleNavMenu} >
                    <img src={Hamburger} alt="" />
                </div>

                {/* FOR MOBILE NAV BAR */}
                <div className='mobile-nav'>
                    <ul className={isMenuOpen ? 'list' : 'list hide'}>
                        <li onClick={handleNavMenu} className='link'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li onClick={handleNavMenu} className='link'>
                            <Link to='/'>Resources</Link>
                        </li>

                        <span onClick={() => setTypesDropdown(!typesDropdown)}>
                            <li > Types of care<i className={typesDropdown ? "fa-solid fa-chevron-up ml-5 " : "fa-solid fa-chevron-down ml-5 "}></i>
                            </li>
                            {typesDropdown && <TypesOfCareDropdown />}
                        </span>


                        <span onClick={() => setLoginDropdown(!loginDropdown)}>
                            <li >Login<i className={loginDropdown ? "fa-solid fa-chevron-up ml-5 " : "fa-solid fa-chevron-down ml-5 "}></i>
                            </li>
                            {loginDropdown && <LoginAsDropDown />}
                        </span>

                        <span onClick={() => setSignupDropdown(!signupDropdown)}>
                            <li style={{ position: 'relative' }}> Sign Up  <i className={signupDropdown ? "fa-solid fa-chevron-up ml-5 " : "fa-solid fa-chevron-down ml-5 "}></i>
                            </li>
                            {signupDropdown && <SingupDropdown />}
                        </span>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navabar
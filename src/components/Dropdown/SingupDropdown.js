import React, { useContext, useEffect, useState } from 'react'
import './Dropdown.css'
import { SignupAs } from '../MenuItems/MenuItems'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/Context'
import platform from 'platform'


const TypesOfCareDropdown = () => {
    const [isMenuOpen, setIsMenuOpen, typesDropdown, setTypesDropdown, signupDropdown, setSignupDropdown] = useContext(AppContext)

    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
        setIsMenuOpen(false)
        setSignupDropdown(false)
    }
    const [device, setDevice] = useState('')

    useEffect(() => {
        setDevice(platform.os.family)
        setSignupDropdown(false)
    })

    return (
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {/* {SignupAs.map((item, index) => {
                    return (
                        <li key={index}> 
                            <Link className={item.cName} to={item.pathname} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })} */}

                <li>
                    {(device === 'Android') ? (<a className='dropdown-link' href='https://play.google.com/store/apps'>Login as an Individual</a>) : (device === 'iOS') ? (<a className='dropdown-link' href='https://www.apple.com/store'>Login as an Individual</a>) : (<Link to='/signup' className='dropdown-link'>Sign Up as an Individual</Link>)}
                </li>


                <li>
                    <Link className='dropdown-link' to='/signup' onClick={() => setClick(false)}>
                        Sign Up as a Doctor
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default TypesOfCareDropdown
import React, { useContext, useEffect, useState } from 'react'
import './Dropdown.css'
import { LoginAs } from '../MenuItems/MenuItems'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/Context'
import platform from 'platform'

const LoginAsDropdown = () => {
    
    const [isMenuOpen, setIsMenuOpen, loginDropdown, setLoginDropdown] = useContext(AppContext)
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
        setLoginDropdown(false)
        setIsMenuOpen(false)
    }

    const [device, setDevice] = useState('')
    useEffect(() => {
        setDevice(platform.os.family)
    }, [])

    
    return (
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {/* {LoginAs.map((item, index) => {
                    return (
                        <li key={index}> 
                            <Link className={item.cName} to={item.pathname} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })} */}
                
                <li  onClick={() => setClick(false)}>
                    {(device === 'Android') ? (<a className='dropdown-link' href='https://play.google.com/store/apps'>Login as an Individual</a>) : (device === 'iOS') ? (<a className='dropdown-link' href='https://www.apple.com/store'>Login as an Individual</a>) : (<Link to='/login' className='dropdown-link' >Login as an Individual</Link>)}
                </li>


                <li>
                    <Link className='dropdown-link' to='/login' onClick={() => setClick(false)}>
                        Login as a Doctor
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LoginAsDropdown
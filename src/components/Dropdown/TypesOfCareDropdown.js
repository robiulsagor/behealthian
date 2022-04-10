import React, { useContext, useState } from 'react'
import './Dropdown.css'
import { TypesOfCare } from '../MenuItems/MenuItems'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/Context'

const TypesOfCareDropdown = () => {
    const [isMenuOpen ,setIsMenuOpen, typesDropdown, setTypesDropdown] = useContext(AppContext)
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
        setIsMenuOpen(false)
        setTypesDropdown(false)
    }

    return (
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {TypesOfCare.map((item, index) => {
                    return (
                        <li key={index}> 
                            <Link className={item.cName} to={item.pathname} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TypesOfCareDropdown
import React from 'react'
import './Topbar.css'
import Logo from '../../assets/imgs/logo.png'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='top-bar'>
      <div className='container'>
        <Link to='/'><img src={Logo} alt="" /></Link>
      </div>
    </div>
  )
}

export default Topbar
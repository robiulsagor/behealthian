import React from 'react'
import './Responsibility.css'
import Image1 from '../../assets/imgs/image 1.png'
import Image2 from '../../assets/imgs/image 2.png'

const Responsibility = () => {
    return (
        <section className='responsibility'>
            <div className='flex-container container'>

                <div className="section-half" >
                    <div className="for-desktop">
                        <h1 className='header-1'>Your Care <br /> Our Responsibilities</h1>
                        <p className='para-2'>Manage Your Health Records With The Best Doctor Appointment App</p>
                        <button className='btn btn-black'>Let's Start</button>
                    </div>
                </div>
                <div className="section-half img">
                    <div className="res-img">
                        <img src={Image1} className='res-img-1' alt="" />
                        <img src={Image2} className='res-img-2' alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Responsibility
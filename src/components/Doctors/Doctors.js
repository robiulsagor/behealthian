import React from 'react'
import './Doctors.css'
import CheckIcon from '../../assets/imgs/check.png'
import Doctor from '../../assets/imgs/doc.png';
import DocCard from '../../assets/imgs/doc-card.png'
import Img1 from '../../assets/imgs/img1.png'

function Doctors() {
    return (
        <section className='doctors'>
            <div className='flex-container container'>

                <div className="section-half">
                    <h2 className="section-header">Quality Services with Our Best
                        Experienced Doctors </h2>
                    {/* <p className='section-subhead'>Lorem ipsum, or lipsum as it is sometimes known, is dummy
                        text used in laying out print, graphic or web designs.</p> */}

                    <ul className="doctors-features">
                        <li><img src={CheckIcon} alt="" className='checkIcon' />
                            24 x 7 access to Real-time Information
                        </li>
                        <li><img src={CheckIcon} alt="" className='checkIcon' />
                            Advanced Multi Parameter Search
                        </li>
                        <li><img src={CheckIcon} alt="" className='checkIcon' />
                            Easy Handling of Appointments
                        </li>
                        <li><img src={CheckIcon} alt="" className='checkIcon' />
                            Reviews and Feedback
                        </li>
                    </ul>
                </div>

                <div className="section-half">
                    <div className="doctor-img">
                        <img src={Doctor} alt="" />
                        <img src={DocCard} alt="" className='doc-card' />
                        <div className='doc-top'>
                            <img src={Img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Doctors
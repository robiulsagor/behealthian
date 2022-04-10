import React from 'react'
import './Steps.css'
import SearchIcon from '../../assets/imgs/search.png'
import CalenderIcon from '../../assets/imgs/calender.png'
import PhoneIcon from '../../assets/imgs/mobile.png'
import MoneyIcon from '../../assets/imgs/money.png'

function Steps() {
    return (
        <section id="steps" className='steps'>
            <div className="container">

                <h2 className="section-title">3 Easy Steps and Get Your Solution</h2>
                <div className="card-container">

                    <div className="card">
                        <img src={SearchIcon} alt="" className='cardIcon' />
                        <h3>Search Best Doctor</h3>
                        <p>We are providing a platform for country's best doctors to reach everywhere.</p>
                    </div>

                    <div className="card">
                        <img src={CalenderIcon} alt="" className='cardIcon' />
                        <h3>Get Appointment</h3>
                        <p>Get appointments easily so you don't have to wait in long lines of patients.</p>
                    </div>

                    <div className="card">
                        <img src={PhoneIcon} alt="" className='cardIcon' />
                        <h3>Happy Consultations</h3>
                        <p>Consult with our top rated doctors.</p>
                    </div>

                    <div className="card">
                        <img src={MoneyIcon} alt="" className='cardIcon' />
                        <h3>Online Payment</h3>
                        <p>With our hassle-free online payment system you can book appoinments easily.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Steps;
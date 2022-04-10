import React from 'react'
import './Partners.css'
import Partner1 from '../../assets/imgs/partner1.png'
import Partner2 from '../../assets/imgs/partner2.png'
import Partner3 from '../../assets/imgs/partner3.png'
import Partner4 from '../../assets/imgs/partner4.png'
import Partner5 from '../../assets/imgs/partner5.png'

function Pertners() {
    return (
        <section className='partners'>
            <h1 className="section-title">Our Partners</h1>
            <div className="partner-logo-container">
                <img src={Partner1} alt="" className='partner-logo'/>
                <img src={Partner2} alt="" className='partner-logo'/>
                <img src={Partner3} alt="" className='partner-logo'/>
                <img src={Partner4} alt="" className='partner-logo'/>
                <img src={Partner5} alt="" className='partner-logo'/>
            </div>
        </section>
    )
}

export default Pertners
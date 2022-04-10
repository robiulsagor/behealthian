import React from 'react'
import './MobileApp.css'
import AppIcon from '../../assets/imgs/app.png'
import PlayIcon from '../../assets/imgs/play-icon.png'
import AppleIcon from '../../assets/imgs/apple-icon.png'

function MobileApp() {
    return (
        <section className='flex-container container'>
            <div className='section-half'>
                <img src={AppIcon} alt="" className='app-icon' />
            </div>
            <div className='section-half'>
                <h2 className="section-header">Download the Behealthian App</h2>
                <p className='app-subhead'>Book appointment and access your records using our App. Download it from Google Play Store or Apple store.</p>
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
        </section>
    )
}

export default MobileApp
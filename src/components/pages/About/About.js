import React from 'react'
import Footer from '../../Footer/Footer'
import Navabar from '../../Navbar/Navbar'

export default function AboutUs() {
    return (
        <div className='wholePage'>
            <Navabar />
            <div className='pageHolder'>
                <div className='pageContainer'>
                    <div className='pageHeaderContainer'>
                        <h2 className='pageHeader'>About Us</h2>
                    </div>
                    <p>
                        BeHealthian was founded to tackle patient difficulties, starting with online appointment scheduling, and
                        we haven't stopped since. You can find open appointment times for physicians and schedule them
                        quickly online with BeHealthian, make educated decisions based on verified ratings, and keep on top of
                        essential exams with personalised reminders. Obviously, your healthcare experience isn't yet flawless.
                        But, no matter what, we'll continue to prioritise the requirements of the patient. We just feel there is no
                        other way to provide the high-quality healthcare that we all deserve.
                        Behealthian offers online technology platform both for doctors and patients. Doctors and health service
                        providers can track their patient’s registration, appointments and follow ups smoothly through clinic
                        management software.
                        <br /><br />
                        From finding the right doctor and hospital, booking appointments, comparing costs and solving your
                        health queries. We make it easier for you. We provide hassle-free online appointment booking system.
                        So you don't have to wait in long lines to meet your doctor.
                    </p>

                    <h4>Benefits for Users</h4>
                    <p>
                        Online Appointment with Doctors Manage your family's health records, as well as save and update vital
                        statistics and digital prescriptions.
                    </p>

                    <h4>Benefits for Clinics</h4>
                    <p>
                        Reduce patient wait times by establishing an online presence and converting to a paperless clinic.
                        Doctors' personal calendars
                        Interaction with patients that is seamless
                    </p>

                    <h4>Vision and Mission</h4>
                    <p>

                        To build and maintain a powerful, dependable, and supporting database for doctors and clinics, as well
                        as to contribute to a world powered by good health.
                    </p>

                </div>
            </div>
            <Footer />
        </div>
    )
}

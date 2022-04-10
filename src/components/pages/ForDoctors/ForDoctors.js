import React from 'react'
import Footer from '../../Footer/Footer'
import Navabar from '../../Navbar/Navbar'

export default function ForDoctors() {
    return (
        <div className='wholePage'>
            <Navabar />
            <div className='pageHolder'>
                <div className='pageContainer'>
                    <div className='pageHeaderContainer'>
                        <h2 className='pageHeader'>For Doctors</h2>
                    </div>
                    <h4> The Most Effective Clinic Administration Software</h4>
                    <p>
                        A cloud-based solution that provides Doctors and Healthcare Professionals with strong end-to-end Practice Management Software for entirely digitising their clinics. You can use Behealthian
                        to manage your practise, automate your workflows, and avoid errors and data loss. You don't
                        have to go through a stack of documents to find what you're looking for. Everything is available
                        in only a few clicks.
                    </p>

                    <h4>Management of Appointments</h4>
                    <p>
                        In just a few clicks, you can plan, cancel, and reschedule patient appointments and follow-ups.
                    </p>

                    <h4>Management of Patients</h4>
                    <p>In one spot, manage patient information, digital health records, services, e-prescriptions, and more.</p>

                    <h4>Payments &amp; Billing</h4>
                    <p>With our powerful software, you can efficiently handle your patients' bills, due payments,
                        estimations, and invoices.</p>

                    <h4>Broaden Your Audience</h4>
                    <p> We assist you in creating social accounts so that patients seeking medical assistance on social
                        media may find you.</p>

                    <h4>Rank Among Best Specialists</h4>
                    <p>When you see your name at the top positions in search results, our exceptional SEO services will
                        make you go crazy
                        .</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

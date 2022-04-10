import './contact.css'
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Navabar from "../../Navbar/Navbar";
import img1 from '../../../assets/imgs/contact/img1.svg'
import img2 from '../../../assets/imgs/contact/img2.svg'
import img3 from '../../../assets/imgs/contact/img3.svg'
import img4 from '../../../assets/imgs/contact/img4.svg'
import img5 from '../../../assets/imgs/contact/img5.svg'
import img6 from '../../../assets/imgs/contact/img6.svg'


export default function Contact() {
    return (
        <div className='wholePage'>
            <Navabar />
            <div className='pageHolder'>
                <div className='pageContainer'>
                    <div className='pageHeaderContainer'>
                        <h2 className='pageHeader'>Contact Us</h2>
                    </div>

                    <div className="contactContainer">
                        <Link to='/contact/ticket/1'>
                            <div className="contactCard">
                                <img src={img1} alt="" />
                                <h4>Talk to a doctor</h4>
                                <p>Book an appointment with your doctor, or connect with an urgent care doctor 24/7. For medical emergencies, call 911.</p>
                            </div>
                        </Link>

                        <Link to='/contact/ticket/2'>
                            <div className="contactCard">
                                <img src={img2} alt="" />
                                <h4>Contact member support</h4>
                                <p>Need help with our app or service? Our Member Support team is available 9am-8pm Pacific every day.   </p>
                            </div>
                        </Link>

                        <Link to='/contact/ticket/3'>
                            <div className="contactCard">
                                <img src={img3} alt="" />
                                <h4>Contact doctor support</h4>
                                <p>Are you a U.S. licensed doctor with questions about HealthTap's Doctor Network? We're here to help.</p>
                            </div>
                        </Link>

                        <Link to='/contact/ticket/4'>
                            <div className="contactCard">
                                <img src={img4} alt="" />
                                <h4>Contact media team</h4>
                                <p>Media members—seeking an interview or a quote? Get in touch here.</p>
                            </div>
                        </Link>

                        <Link to='/contact/ticket/5'>
                            <div className="contactCard">
                                <img src={img5} alt="" />
                                <h4>Start a partnership</h4>
                                <p>Want to help us place a quality primary care doctor at every American's fingertips? Let's talk.</p>
                            </div>
                        </Link>

                        <Link to='/contact/ticket/6'>
                            <div className="contactCard">
                                <img src={img6} alt="" />
                                <h4>Contact leagal team</h4>
                                <p>We're here to help with all legal or compliance inquiries.</p>
                            </div>
                        </Link>



                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

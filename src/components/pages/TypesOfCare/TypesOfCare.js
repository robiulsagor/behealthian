import React, { useRef, useEffect } from 'react'
import './TypesOfCare.css'
import Navabar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'

export default function TypesOfCare() {
    const nav = useLocation().hash
    const navLink = nav.slice(1)
    console.log(navLink);

    const neuroAndSpine = useRef()
    const orthopedics = useRef()
    const general = useRef()
    const cardiology = useRef()
    const nephrology = useRef()
    const obstetrics = useRef()
    const urology = useRef()
    const gastro = useRef()
    const anesthesiology = useRef()

    useEffect(() => {
        if (navLink === 'neuroAndSpine') { neuroAndSpine.current.scrollIntoView() }
        if (navLink === 'orthopedics') { orthopedics.current.scrollIntoView() }
        if (navLink === 'general') { general.current.scrollIntoView() }
        if (navLink === 'cardiology') { cardiology.current.scrollIntoView() }
        if (navLink === 'nephrology') { nephrology.current.scrollIntoView() }
        if (navLink === 'obstetrics') { obstetrics.current.scrollIntoView() }
        if (navLink === 'urology') { urology.current.scrollIntoView() }
        if (navLink === 'gastro') { gastro.current.scrollIntoView() }
        if (navLink === 'anesthesiology') { anesthesiology.current.scrollIntoView() }
    }, [navLink])

    return (
        <div className='wholePage'>
            <Navabar />
            <div className='pageHolder'>
                <div className='pageContainer'>

                    <div className='pageHeaderContainer'>
                        <h2 className='pageHeader'>Types of Care</h2>
                    </div>
                    <h4 ref={neuroAndSpine}>Neuro and Spine Surgery</h4>
                    <p>
                        A neurosurgeon specializes in the medical and surgical care of people with diseases and
                        conditions of the brain and nervous system, including the spinal cord, nerves, muscles, and
                        related blood vessels. Neurosurgeons diagnose and treat many diseases, including stroke, seizure
                        disorders, back problems, brain and spine tumors, injuries, and birth defects. Behealthian is a
                        free online service that helps patients find doctors and surgeons for Neuro &amp; spine Consultation
                        and book appointments instantly.
                    </p>


                    <h4 ref={orthopedics}>Orthopedics &amp; Joint Replacement</h4>
                    <p>


                        An orthopedic surgeon specializes in diagnosing, treating, preventing and rehabilitating injuries
                        and diseases of the musculoskeletal system, including the muscles, joints, ligaments, tendons,
                        nerves and bones. Behealthian is a free online service that helps patients find doctors for
                        Orthopaedic Consultation and book appointments instantly.
                    </p>

                    <h4 ref={general}>General and Laparoscopic Surgery</h4>
                    <p>A general surgeon specializes in the surgical care of diseases, injuries and deformities affecting
                        the abdomen, breasts, digestive tract, endocrine system, and skin. General surgeons treat many
                        conditions affecting adults and children, including appendicitis, bowel obstruction, breast and
                        colon cancer, gallstones, hernias, and pancreatitis. Behealthian is a free online service that helps
                        patients find doctors for General and Laparoscopic surgery and book appointments instantly.
                    </p>

                    <h4 ref={cardiology}>Cardiology</h4>
                    <p>
                        A cardiologist specializes in caring for people with conditions and diseases of the heart and blood
                        vessels. Cardiologists diagnose and treat many diseases, including coronary heart disease, angina,
                        arrhythmias, heart attack, and heart failure. Behealthian is a free online service that helps
                        patients find doctors for Cardiology and book appointments instantly.
                    </p>

                    <h4 ref={nephrology}>Nephrology</h4>
                    <p>
                        A nephrologist specializes in the health needs of people with kidney diseases and disorders.
                        Nephrologists diagnose and treat kidney problems, such as kidney stones and kidney failure.
                        Behealthian is a free online service that helps patients find doctors for Nephrology Consultation
                        and book appointments instantly.
                    </p>

                    <h4 ref={obstetrics}>Obstetrics and Gynaecology</h4>
                    <p>
                        A friendly and competent OB-GYN plays a crucial role in maintaining lifelong health and ensuring
                        a healthy pregnancy. At BeHealthian, we have always strived to make healthcare accessible to
                        all. You can simply enter your preferred location and Behealthian will display you the top-rated
                        OB-GYNs in your neighborhood.
                    </p>

                    <h4 ref={urology}>Urology</h4>
                    <p>
                        A urologist specializes in caring for people of all ages with diseases and conditions of the
                        genitourinary tract. This includes the bladder, urethra, ureters, kidneys, male and female genitals,
                        and the prostate gland. Behealthian is a free online service that helps patients find doctors for
                        Urology Consultation and book appointments instantly.
                    </p>

                    <h4 ref={gastro}>Gastro and Liver Care</h4>
                    <p>A gastroenterologist specializes in preventing, diagnosing and treating conditions of the
                        gastrointestinal (GI) tract, or digestive system. This includes the esophagus, stomach, intestines,
                        liver, pancreas and gallbladder. A GI specialist focuses on the health needs of adults with digestive
                        problems. Behealthian is a free online service that helps patients find doctors for Gastro and Liver
                        care and book appointments instantly.
                    </p>

                    <h4 ref={anesthesiology}>Anesthesiology &amp; Critical Care</h4>
                    <p>An anesthesiologist is a physician who specializes in relieving pain and providing total medical
                        care for patients before, during and after surgery. Behealthian is a free online service that helps
                        patients find doctors for Anesthesiology &amp; Critical care and book appointments instantly</p>

                </div>
            </div>
            <Footer />
        </div>
    )
}

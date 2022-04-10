import { useState, useEffect } from 'react'
import Navabar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './Requests.css'
import { useDropzone } from 'react-dropzone'
import { useNavigate, useParams } from 'react-router-dom'

export default function Requests() {
    const id = useParams().contactID
    const navigate = useNavigate()

    // input values
    const [value, setValue] = useState('')
    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')
    const [files, setFiles] = useState([])

    // get the contact id to auto select dropdown menu
    useEffect(() => {
        switch (id) {
            case '1':
                setValue('talkToDoctor')
                break;
            case '2':
                setValue('memberSupport')
                break;
            case '3':
                setValue('doctorSupport')
                break;
            case '4':
                setValue('contactMedia')
                break;
            case '5':
                setValue('partnership')
                break;
            case '6':
                setValue('contactLegalTeam')
                break;

            default:
                setValue('contactLegalTeam')
                break;
        }
    }, [])



    // image upload function
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            )
        }
    })

    // selected image remove function
    const removefile = fileName => {
        const nowFile = files.filter(file => file.name !== fileName)
        setFiles(nowFile)
    }

    // image upload function
    const images = files.map(file => (
        <div>
            <div>
                {/* <img src={file.preview} style={{ width: '200px' }} alt="preview" /> */}
                {console.log(file)}

                <div className="fileInfoContainer">
                    <div className='fileName'>{file.name}</div><br /><br />
                    <div>

                        <div className='omitBtn' onClick={() => removefile(file.name)}>X</div>
                    </div>
                </div>
            </div>
        </div>
    ))

    // handle the form submission
    const handleSubmit = e => {
        e.preventDefault()
        const getIssue = document.getElementById('issue')
        const getIssueVal = getIssue.value;
        const request = {
            id: Date.now(),
            getIssueVal: getIssueVal,
            fName: fName,
            lName: lName,
            email: email,
            subject: subject,
            desc: description,
            file: files
        }
        console.log(request);

        navigate('/thankyou', { replace: true })
    }

    return (
        <div className='wholePage'>
            <Navabar />
            <div className='pageHolder contactFormContainer'>
                <div className='pageContainer'>
                    <div className='pageHeaderContainer'>
                        <h2 className='pageHeader'>Send Us a Message</h2>
                    </div>
                    <div>
                        <div className="contactForm">
                            <form onSubmit={handleSubmit}>
                                <div className='input-group'>
                                    <label htmlFor="issue">Please choose your issue below</label>
                                    <select name="issue" id="issue" value={value} onChange={e => setValue(e.target.value)}>
                                        <option value="default" disabled >---</option>
                                        <option value="talkToDoctor" >Talk to a doctor</option>
                                        <option value="memberSupport" selected>Contact Member Support</option>
                                        <option value="doctorSupport">Contact Doctor Support</option>
                                        <option value="contactMedia">Contact Media Team</option>
                                        <option value="partnership">Start a Partnership</option>
                                        <option value="contactLegalTeam">Contact Legal Team</option>
                                    </select>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="email" >Your email address <span>*</span></label>
                                    <input type="email" name="email" onChange={e => setEmail(e.target.value)} value={email} required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="fName">First Name <span>*</span></label>
                                    <input type="text" name="fName" onChange={e => setfName(e.target.value)} value={fName} required />
                                    <span className='inputDetails'>Enter the account holder's first name</span>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="lName">Last Name <span>*</span></label>
                                    <input type="text" name="lName" onChange={e => setlName(e.target.value)} value={lName} required />
                                    <span className='inputDetails'>Enter the account holder's last name</span>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="text" name="phone" id="phone" onChange={e => setPhone(e.target.value)} value={phone} required />
                                    <span className='inputDetails'>Enter the phone number associated with your HealthTap account</span>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="subject">Subject <span>*</span></label>
                                    <input type="text" name="lName" id="subject" onChange={e => setSubject(e.target.value)} value={subject} required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="fName">Description <span>*</span></label>
                                    <textarea name="description" id="description" cols="30" rows="6" onChange={e => setDescription(e.target.value)} value={description} required></textarea>
                                    <span className='inputDetails'>Please tell us the details of your support request. Remember, the Member Support Team is here to help you but does not provide any health care or medical advice. For medical emergencies, call 911 (or your local emergency number) or go to the nearest emergency room.</span>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="">Attachments</label>


                                    <div {...getRootProps()} className='inputFile'>
                                        <input {...getInputProps()} />
                                        <p>Add Files or drag files here...</p>
                                    </div>

                                    <div>{images} </div>
                                </div>

                                <button type='submit' className='submit'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}

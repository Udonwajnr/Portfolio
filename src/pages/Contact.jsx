import React from 'react'
import '../components/assets/css/Contact.css'
import {motion} from 'framer-motion'
import '../components/assets/css/responsive/Contact.css'
import { useRef , useState} from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [input,setInput] = useState({})
  


  const form = useRef()

  const handleChange =(e)=>{
    let newInput = {[e.target.name]:e.target.value}
    setInput({...input, ...newInput})
  }

  const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm(`${process.env.REACT_APP_EMAIL_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_EMAIL_YOUR_TEMPLATE_ID}`,form.current,`${process.env.REACT_APP_EMAIL_YOUR_PUBLIC_KEY}`)
    .then(()=>{ alert("Your message has been sent successfully");e.target.reset()})
    .catch(()=>alert('Message has not been sent. Try again'))
  } 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >

       
      <div className="contact-section">
        <div className="contact-form-section">
          <div className="form-header">
            <h2>Contact me</h2>
            <p>I’m interested in freelance opportunities especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="top-input">
                <div className='name'>
                  <label htmlFor="">Name</label>
                  <input type="text" name='form_name' onChange={handleChange} required/>
                </div>

                <div className='email'>
                  <label htmlFor="">Email</label>
                  <input type="text" name='form_name' onChange={handleChange} required/>
                </div>
              </div>

              <div className='message'>
                <label htmlFor="">Message</label>
                <textarea type="text" onChange={handleChange} required/>
              </div>

              <div className="submit">
                <button type='submit'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </motion.div>

    
  )
}

export default Contact
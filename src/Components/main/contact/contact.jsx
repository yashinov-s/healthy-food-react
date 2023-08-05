import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <div className='contact'>
        
        <div className='contactt container'>

            <p className='contact1 cnt-ptext'>Contact</p>

            <h2 className='contact1 cnt-htext'>Food Stalls with Persons but also specialized equipment, Skills to mana ge.</h2>

            <div className='contact1 cnt-div'>
            <input className='contact1 cnt-input' type="text" placeholder='Enter your message' />
            <button className='contact1 cnt-btn'>Send</button>
            </div>
        </div>

    </div>
  )
}

export default Contact
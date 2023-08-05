import React from 'react'
import "./test.scss"
import opc from "../../../Assets/img/foto-opa2.jpg"
import yulduzbew from "../../../Assets/img/4yulduz.png"

const Test = () => {
  return (
    <div className='test'>

        <div className='testt containe'>
            <p className='test test-ptext'>Testimonial</p>
            <h3 className='test test-htext'>Making Food great again and again</h3>
            <p className='test test-p1text'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
            <div className='test test-div'>
            <img className='test test-foto' src={opc} alt="" />
            </div>
            <p className='test test-p2text'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
            <div className='test test-div'>
            <img className='test test-rasm' src={yulduzbew} alt="" />
            <p className='test test-p3text'>Augusta W. Reynoso</p>
            <p className='test test-p4text'>UI&UX DeSIGNER</p>
            </div>
        </div>

    </div>
  )
}

export default Test
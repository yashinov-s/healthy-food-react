import React from 'react'
import "./take.scss"
import apple from "../../../Assets/img/App.svg"
import google from "../../../Assets/img/google.svg"
import telefon from "../../../Assets/img/ovqatnarx.png"

function Take() {
  return (
    <div className='take'>

        <div className='takeaway container'>

            <div className='taken taken_div'>
            <p className='taken p_text'>Take away</p>
            <h3 className='taken h_text'>Food Stalls with Persons but  to  Product marketing plane. </h3>
            <p className='taken p1_text'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</p>
            <div className='taken divv'>
            <img src={apple} alt="" />
            <img className='taken gg_img' src={google} alt="" />
            </div>

            </div>
            <img className='taken tt_img' src={telefon} alt="" width='323' height='651' />
        </div>

    </div>
  )
}

export default Take
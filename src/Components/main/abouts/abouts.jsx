import "./abouts.scss"
import React from 'react'
import opaca from "../../../Assets/img/foto-opa.jpg"

const Abouts = () => {
  return (
    <div className="aboutsus">

        <div className="abouts container">
            <img className="abouts abt_img" src={opaca} alt="zz" width='555' height='500' />

            <div className="about abt_div">
                <h3 className="abouts abt_h1">About us</h3>
                <h3 className="abouts abt_h2">Food Stalls with Persons but  to  Product marketing plane
                catlogues etc to. </h3>

                <p className="abouts abt_h3">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                equipment  make your marketing plane Effective.</p>

                <span>
                <a className="abouts abt_link" href="#">Read More</a>   
                </span>
            </div>
        </div>

    </div>
  )
}

export default Abouts
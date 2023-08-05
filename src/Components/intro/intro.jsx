import "./intro.scss"
import React from 'react'
import rasmovqat from "../../Assets/img/ovqattayor.png"

const Intro = () => {
  return (
    <div className="intro">

        <div className="introo container">
            <div className="intro bola">
                <h2 className="intro texth">Making time a good time by making food the good food.</h2>
                <p className="intro textp">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>

                <a className="intro _link" href="#">Order Now</a>

                <a className="intro _link1" href="#">Food Details</a>
            </div>

            <img className="intro int_img" src={rasmovqat} alt="ovqat" width="580" height="503" />
        </div>

    </div>
  )
}

export default Intro
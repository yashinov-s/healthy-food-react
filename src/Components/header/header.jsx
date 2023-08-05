import "./header.scss"
import React from 'react'
import loggo from "../../Assets/img/logo.svg"

const Header = () => {
  return (
    <div className="header">

        <div className="headerr container">
            <a href="#">
                <img src={loggo} alt="logo" />
            </a>

            <ul className="header list">
                <li className="header item">
                    <a className="header link1" href="#">Home</a>
                </li>
                <li className="header item">
                    <a className="header link" href="#">About us</a>
                </li>
                <li className="header item">
                    <a className="header link" href="#">Menu</a>
                </li>
                <li className="header item">
                    <a className="header link" href="#">Features</a>
                </li>
                <li className="header item">
                    <a className="header link" href="#">Contact us</a>
                </li>
            </ul>
            <a className="header link3" href="#">Booking Now</a>
        </div>

    </div>
  )
}

export default Header
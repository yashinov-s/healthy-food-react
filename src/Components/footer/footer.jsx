import React from 'react'
import "./footer.scss"
import logo from "../../Assets/img/logo.svg"

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footerr ftr-div container'>
            <div>
            <a className='footerr ftr-link' href="#">
                <img className='footerr ftr-link' src={logo} alt="" />
            </a>
            <p className='footerr ftr-ptext'>www.company name.com</p>
            <p className='footerr ftr-ptext'>companyname@gmail.com</p>
            <p className='footerr ftr-ptext'>Phone: +7 485-118-03-25</p>
            </div>

            <ul className='footerr ftr-list'>
                <li className='footerr ftr-item'>
                  <a className='footerr ftr-link1' href="#">Home</a>  
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">Landingpage</a>  
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">Documentation</a>  
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">Referral Program</a>  
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">UI & UX Design</a>  
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">Web Design</a>  
                </li>
            </ul>


            <ul className='footerr ftr-list'>
                <li className='footerr ftr-item'>
                  <a className='footerr ftr-link1' href="#">Menu</a>
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">Landingpage</a>
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">Documentation</a>
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">Referral Program</a>
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">UI & UX Design</a>
                </li>

                <li className='footerr ftr-item'>
                  <a className='footerr ftr-linkk' href="#">Web Design</a>
                </li>

            </ul>

            <ul className='footerr ftr-list'>
                <li className='footerr ftr-item'>
                  <a className='footert ftr-link1' href="#">Company</a>
                </li>

                <li className='footerr ftr-item'>
                  <a className='footert ftr-linkk' href="#">Landingpage</a>
                </li>

                <li className='footerr ftr-item'>
                  <a className='footert ftr-linkk' href="#">Documentation</a>
                </li>

                <li className='footerr ftr-item'>
                  <a className='footert ftr-linkk' href="#">Referral Program</a>
                </li>

            </ul>
        </div>

    </div>
  )
}

export default Footer
import React from 'react'
import "./menu.scss"
import tovq from "../../../Assets/img/16dolor.jpg"
import yulduzbew from "../../../Assets/img/4yulduz.png"
import salat from "../../../Assets/img/12dolor.jpg"
import burger from "../../../Assets/img/10dolor.jpg"
import steak from "../../../Assets/img/14dolor.jpg"
import tuhumsalat from "../../../Assets/img/9dolor.png"
import oziqovqat from "../../../Assets/img/15dolor.jpg"

const Menu = () => {
  return (
    <div className='menu'>

        <div className='menuu container'>
            <p className='menu menu_p'>Menu</p>
            <h3 className='menu menu_h'>Food Full of treaty Love</h3>
            <p className='menu menu_p1'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>

            <ul className='menu menu_list'>
                <li className='menu menu_item1'>
                  <img className='menu_img1' src={tovq} alt="tovq" width='379' height='264' />  
                  <div>
                  <h3 className='menu_h3'>Vegie Muffen</h3>
                  <p className='menu menu_p3'>16$</p>
                  </div>
                  <p className='menu_p4'>There are many things are needed to start the Fast Food Business.</p>
                  <div className='menu_spna'>
                  <p className='menu_plus'>+</p>
                  <img className='menu_yulduz' src={yulduzbew} alt="" width='88' height='16' />
                  </div>
                </li>

                <li className='menu menu_item1'>
                  <img className='menu_img1' src={salat} alt="" width='379' height='264' />  
                  <div>
                  <h3 className='menu_h3'>Salads</h3>
                  <p className='menu menu_p3'>12$</p>
                  </div>
                  <p className='menu_p4'>There are many things are needed to start the Fast Food Business.</p>
                  <div className='menu_spna'>
                  <p className='menu_plus'>+</p>
                  <img className='menu_yulduz' src={yulduzbew} alt="" width='88' height='16' />
                  </div>
                </li>

                <li className='menu menu_item1'>
                  <img className='menu menu_img1' src={burger} alt="" width='379' height='264' />  
                  <div>
                  <h3 className='menu_h3'>Burger</h3>
                  <p className='menu menu_p3'>10$</p>
                  </div>
                  <p className='menu_p4'>There are many things are needed to start the Fast Food Business.</p>
                  <div className='menu_spna'>
                  <p className='menu_plus'>+</p>
                  <img className='menu_yulduz' src={yulduzbew} alt="" width='88' height='16' />
                  </div>
                </li>

                <li className='menu menu_item2'>
                  <img className='menu menu_img1' src={steak} alt="" width='379' height='264' />  
                  <div>
                  <h3 className='menu_h3'>Delmonico Steak dish</h3>
                  <p className='menu menu_p3'>14$</p>
                  </div>
                  <p className='menu_p4'>There are many things are needed to start the Fast Food Business.</p>
                  <div className='menu_spna'>
                  <p className='menu_plus'>+</p>
                  <img className='menu_yulduz' src={yulduzbew} alt="" width='88' height='16' />
                  </div>
                </li>

                <li className='menu menu_item2'>
                  <img className='menu menu_img1' src={tuhumsalat} alt="" width='379' height='264' />  
                  <div>
                  <h3 className='menu_h3'>Egg Masala</h3>
                  <p className='menu menu_p3'>9$</p>
                  </div>
                  <p className='menu_p4'>There are many things are needed to start the Fast Food Business.</p>
                  <div className='menu_spna'>
                  <p className='menu_plus'>+</p>
                  <img className='menu_yulduz' src={yulduzbew} alt="" width='88' height='16' />
                  </div>
                </li>

                <li className='menu menu_item2'>
                  <img className='menu menu_img1' src={oziqovqat} alt="" width='379' height='264' />  
                  <div>
                  <h3 className='menu_h3'>Egg Masala</h3>
                  <p className='menu menu_p3'>15$</p>
                  </div>
                  <p className='menu_p4'>There are many things are needed to start the Fast Food Business.</p>
                  <div className='menu_spna'>
                  <p className='menu_plus'>+</p>
                  <img className='menu_yulduz' src={yulduzbew} alt="" width='88' height='16' />
                  </div>
                </li>
            </ul>
            <div className='menu unamed'>
            <a className='menu menu_link' href="#">Learn More</a>

            </div>
        </div>

    </div>
  )
}

export default Menu
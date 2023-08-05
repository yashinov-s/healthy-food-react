import "./features.scss"
import React from 'react'
import dom from "../../../Assets/img/uy.png"
import moto from "../../../Assets/img/dastafka.png"
import kul from "../../../Assets/img/smile.png"

function Features() {
  return (
    <div className="feats">   
        <div className="featss container">
            <h3 className="feats fts_texth">Features</h3>
            <h2 className="feats fts_textp">Food with a New Passion</h2>

            <ul className="feats fts_list">
                <li className="feats fts_item">
                  <img src={dom} alt="uy" />  
                  <h3 className="feats fts_h3">Quality Food</h3>
                  <p className="feats fts_p">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </li>

                <li className="feats fts_item">
                <img src={moto} alt="moto" />  
                  <h3 className="feats fts_h3">Food Delivery</h3>
                  <p className="feats fts_p">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </li>

                <li className="feats fts_item">
                <img src={kul} alt="moto" />  
                  <h3 className="feats fts_h3">Food Delivery</h3>
                  <p className="feats fts_p">It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Features
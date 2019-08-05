import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import s from '../../images/logo.png';
import {Button, ButtonToolbar} from 'react-bootstrap';
import './HomeFooter.css'
export default class HomeFooter extends Component {
    render() {
        return (
            <div>
            <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={require('../../images/Home/footer.png')}
              bgImageAlt="Men"
              strength={200}
            >
        <div className="parallax_main_footer">
            <div className="container">
                <div className="footer-Home-width">
            <img
        src={s}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt=" logo"
      />
            <h1 className="pt-5 txt-head">Ready to sell a property?</h1>
<h4 className="footer_text_Home">Let's begin discussing your estate and find out how we can assist you.</h4>
<ButtonToolbar>
                          <Button href="#">Request a consultation</Button>
                          </ButtonToolbar>
                          <a href="https://www.facebook.com/FinesseInteriorsStaging/"><i class="fab fa-facebook-f"></i></a>
                         <a href="https://www.instagram.com/finesse_interiors_staging/"> <i class="fab fa-instagram"></i></a>
                         <a href="mailto:finesseinteriors@rogers.com"> <i class="far fa-envelope-open fa-lg"></i></a>
                          
            </div>

            <div className="row mx-0">
<div className="col-md-6">
    <ul >

        <li className="Text_footer_home_Contant-header">HEAD OFFICE</li>
        <li className="Text_footer_home_Contant">Sue Kempton</li>
        <li className="Text_footer_home_Contant">416.271.7846</li>
        <li className="Text_footer_home_Contant">finesseinteriors@rogers.com</li>
    </ul>
    </div>
    <div className="col-md-6">
    <ul>

        <li className="Text_footer_home_Contant-header_sub">REPRESENTATIVE OFFICE</li>
        <li className="Text_footer_home_Contant_sub">Sarah Brasil</li>
        <li className="Text_footer_home_Contant_sub">905.299.3957</li>
        <li className="Text_footer_home_Contant_sub">sbrasilmedia@gmail.com</li>
    </ul>
    </div>


            </div>
            <hr/>

            <div className="row mx-0">
<div className="col-md-6">
            <ul >
<li className="Text_footer_home_Contant-S">©2019 finesseinteriors</li>
</ul>
</div>
<div className="col-md-6">
            <ul>

            <li className="Text_footer_home_Contant_sub-S">Hand-crafted in Java island</li>
           </ul>
           </div>
              </div>
            </div>
              </div>
              <div style={{ height: '20px' }} />
            </Parallax>           
            </div>
        )
    }
}

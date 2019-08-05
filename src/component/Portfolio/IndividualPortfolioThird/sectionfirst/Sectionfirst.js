import React, { Component } from 'react'
import '../sectionfirst/sectionfirst.css'
import banner from '../../../../images/banner.jpg'

export default class Sectionfirst extends Component {
  render() {
    return (

      <div className="bg-clr">
      <div className="container ">
      <div className="row ">
      <div className="col-md-6">
        <h2 className="mt-5 txt-head">Wondrous Watford</h2>
        <span className="txt-italic">Adding small things make the place more vivacious.</span>
        </div>
  <div className="col-md-6 pr-5" style={{fontSize:"1.2em"}}>
        <p className="m-5 txt-para">This property was magnificent BUT its location was not!  It was more important than ever to create the perfect interior so as to take away from its busy location!  It worked!  SOLD within ONE WEEK!</p>
        <h6 className="share">SHARE</h6>
        <div className="share">
        <i class="fab fa-facebook p-1"></i>
        <i class="fab fa-twitter-square p-1"></i>
        <i class="fab fa-google-plus p-1"></i>
        <i class="fab fa-linkedin p-1"></i>
        <i class="fab fa-pinterest-square p-1"></i>
        </div>
        </div> 
      </div>
      </div> 
        
      </div>
    )
  }
}

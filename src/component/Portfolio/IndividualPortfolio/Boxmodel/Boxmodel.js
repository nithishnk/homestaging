import React, { Component } from 'react'
import {  Modal,  } from 'react-bootstrap';
import potrait1 from '../../../../images/Portfolio/Nature Haven_01/portrait_image.jpg'
import landscape1 from '../../../../images/Portfolio/Nature Haven_01/landscape_image.jpg'
import broom1 from '../../../../images/Portfolio/Nature Haven_01/bedroom.jpg'
import kitchen1 from '../../../../images/Portfolio/Nature Haven_01/kitchen.jpg'
import Before from '../../../../images/Portfolio/Nature Haven_01/before_image.jpg'
import After from '../../../../images/Portfolio/Nature Haven_01/after_image.jpg'
import './Boxmodel.css'

export default class Boxmodel extends Component {
    constructor(props, context,context1) {
      super(props, context,context1);
      this.handleShow = this.handleShow.bind(this);
    
      this.handleClose = this.handleClose.bind(this);
      this.state = {
        show: false,
        vis:false,
      };
    }
   
    
    handleClose() {
      this.setState({ show: false,vis:false, show1: false,show2:false,show3:false,show4:false });
    }
   handleShow() {
      this.setState({ show: true });
    }
    seondHandleShow=()=>{
      this.setState({ vis: true });
    }
   HandleShow1=()=>{
      this.setState({ show1: true });
    }
    HandleShow2=()=>{
      this.setState({ show2: true });
    }
    HandleShow3=()=>{
      this.setState({ show3: true });
    }
    HandleShow4=()=>{
      this.setState({ show4: true });
    }
  
    render() {
      return (
        <>
        <div className="bg-clr">
        <div class="container Container_Padding_Images ">
          <div className="row mx-0">
          <div class="col-md-6">
        <div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={potrait1}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.handleShow}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div></a>
			     
			
		</article>  
</div>
</div>

<div class="col-md-6 pT-Section">
        <div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={Before}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>

					<p onClick={this.HandleShow1}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div>  </a>    
		
		</article>  
</div>
<div className="Sub_Enter">
<div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={After}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.seondHandleShow}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div>  </a>    
		
		</article>  
</div>
</div>
</div>
<div className="col-md-12 Enter_Section">
<div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={landscape1}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.HandleShow2}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div></a>
			     
			
		</article>  
</div>

</div>
<div class="col-md-6 Enter_Section ">
        <div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={broom1}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.HandleShow3}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div></a>
			     
			
		</article>  
</div>
</div>
<div class="col-md-6 Enter_Section">
        <div id="main_content">
<article id="link-boxes">
  	
			<a ui-sref="connect" id="careers" class="gold-outliner" >
				<img className="IM" src={kitchen1}  /> 
				<div class="overlay">
					<div class="text-border text-border-top"></div>
					<p onClick={this.HandleShow4}><i class="fas fa-search G_T"></i></p>
			 		<div class="text-border text-border-bottom"></div>
           <span class="borders border-top-right"></span><span class="borders border-right"></span><span class="borders border-bottom"></span><span class="borders border-left"></span><span class="borders border-top-left"></span>
				</div></a>
			     
			
		</article>  
</div>
</div>
</div>
</div>


        
  
          <Modal show={this.state.show} onHide={this.handleClose}>
          <img class="content-ima" src={potrait1}/>
          </Modal>
          <Modal show={this.state.show1} onHide={this.handleClose}>
          <img class="content-ima img-wid" src={Before}/>
          </Modal>
          <Modal show={this.state.vis} onHide={this.handleClose}>
          <img class="content-ima img-wid" src={After}/>
          </Modal>
          <Modal show={this.state.show2} onHide={this.handleClose}>
          <img class="content-ima" src={landscape1}/>
          </Modal>
          <Modal show={this.state.show3} onHide={this.handleClose}>
          <img class="content-ima" src={broom1}/>
          </Modal>
          <Modal show={this.state.show4} onHide={this.handleClose}>
          <img class="content-ima" src={kitchen1}/>
          </Modal>

          </div>
        </>
      );
    }
  }
  

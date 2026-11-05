import React from 'react'
import { FaTruck, FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div style={{ backgroundColor: '#345F85' }} className='container-fluid text-light pt-5 pb-4'>
      <div className='row mx-5'>
        <div className='col-lg-5 col-md-6 mb-4'>
          <h2 className='fs-2 mb-2'>
            <FaTruck className='me-2' />  DailyCart</h2>
          <p className='fs-5'> Designed and built with all the love in the world by the Luminar team with the help of our contributors. </p>
          <p className='fs-5 mt-4'>  Code licensed Luminar, docs CC BY 3.0. </p>
          <p className='fs-5'> Currently v5.3.2  </p>
        </div>

        <div className='col-lg-2 col-md-6 mb-4'>
          <h2 className='fs-2 mb-2'>Links</h2>
          <p className='fs-5 mb-1'>Home</p>
          <p className='fs-5 mb-1'>Wishlist</p>
          <p className='fs-5 mb-1'>Cart</p>
        </div>

        <div className='col-lg-2 col-md-6 mb-4'>
          <h2 className='fs-2 mb-2'>Guides</h2>
          <p className='fs-5 mb-1'>React</p>
          <p className='fs-5 mb-1'>React Bootstrap</p>
          <p className='fs-5 mb-1'>React Router</p>
        </div>

        <div className='col-lg-3 col-md-6 mb-4'>
          <h2 className='fs-2 mb-2'>Contact Us</h2>
          <div className='d-flex align-items-center gap-2'>
            <input type="email" className='form-control' placeholder='Email Here' />
            <button>SEND</button>
           
          </div>
          <div className='d-flex justify-content-between mt-4 fs-5'>
            <FaFacebookF />
            <FaTwitter />
            <FaWhatsapp />
            <FaInstagram />
            <FaEnvelope />
            <FaPhone />
          </div>
        </div>
      </div>
      <h5 className='text-center mt-5 fw-bold'>Copyright © July 2026 Batch, Daily Cart. Built with React Redux. </h5>
    </div>
  )
}

export default Footer
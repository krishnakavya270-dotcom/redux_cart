import React from 'react'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'

function Footer() {
  return (
    <div style={{backgroundColor:'#3E2723',height:'100% '}} className='container-fluid'>
      <div className='row mx-5'>
        <div className="col-lg-4">
          <h4 className='my-3 fs-2 text-light '>AIrBUILDER</h4>
<p style={{textAlign:"justify" ,color: '#F5E6D3'}} className='fs-5 text-light'>  An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4 my-3"style={{color: '#F5E6D3'}} >
        <h3 className='pb-3'>Contact US</h3>
   <h6>     < MdMailOutline/> resumebuilder@gmail.com</h6>
        <h6><FaPhoneAlt/> 9995745861</h6>
        <h5 className='mt-4'>Connect With US</h5>
        <div className='fs-4'>
          <FaInstagram /> 
          <FaFacebook className='mx-3'/> 
            <FaWhatsapp/> 

        </div>
        </div>
        
      </div>
      <h4 className='text-center mt-4 pb-3' style={{color: '#F5E6D3'}}>Designed & built with ❤️ using React</h4>
    </div>
    
  )
}

export default Footer
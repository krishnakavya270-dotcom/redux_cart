import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'
function View() {
  return (
    <div className='container my-5 pt-5'>
      <div style={{ height: '80vh' }} className='row'>
        <div className='col-lg-6'>
          <img style={{ width: '300px' }} className='img-fluid mt-3' src="https://www.pngall.com/wp-content/uploads/8/Make-Up-Cosmetic-Mascara-PNG-Image.png" alt="product" />

          <div className='d-flex justify-content-center gap-5 mt-n5'>
            <button className='btn btn-success rounded'>Add To Wishlist</button>
            <button className='btn btn-primary rounded'>Add To Cart</button>
          </div>
        </div>
        <div className='col-lg-6'>
          <h3 className='fw-bold'>Title :</h3>
          <h2 className='fw-bold'>$300</h2>
          <h4 className='fw-bold'>Brand :</h4>
          <h4 className='fw-bold'>Category :</h4>
          <h4 className='fw-bold'>Description :</h4>
          <h5 className='fw-bold'>Client Reviews :</h5>
          <div className='border rounded p-2 shadow my-5'>
            <p><span className='fw-bolder'>Name : </span>Message</p>
            <p> Rating : 5 <FontAwesomeIcon icon={faStar} className='text-warning' /></p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default View

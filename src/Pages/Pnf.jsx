import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
    <div>
        <div style={{height:"90vh"}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-75' src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-18.png" alt="error page" />
      <Link to={'/'} style={{ position: 'absolute', left: '48%', top: '61%', transform: 'translateX(-50%)'}} className='btn btn-dark  '>Back to Home</Link>
    
    </div>
    </div>
  )
}

export default Pnf

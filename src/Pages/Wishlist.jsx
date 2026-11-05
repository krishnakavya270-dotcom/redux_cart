import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';

function Wishlist() {
  return (
    <div className='comtainer my-5'>
      <h1 className='pt-5 text-primary fw-bold my-5'>User'S WishList</h1>
      <div className='row pt-5'>
        <div className='col-3'>
          {/* cards */}
          <Card >
            <Card.Img style={{ height: '250px' }} variant="top" src="https://stylecaster.com/wp-content/uploads/2015/04/x1532.jpg" />
            <Card.Body className='text-center'>
              <Card.Title>Foundation</Card.Title>

              <div className='d-flex justify-content-evenly'>
                <button className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                <button className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus} /></button>

              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Wishlist

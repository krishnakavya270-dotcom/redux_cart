import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useDispatch,useSelector } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

function Header({insideProduct}) {
    const userWishlist = useSelector(state=>state.wishlistReducer)
    const userCart = useSelector(state=>state.cartReducer)

  const dispatch= useDispatch()
  return (
    <Navbar style={{ backgroundColor: '#345F85' }} expand="lg" className=" fixed-top">
      <Container>
        <Navbar.Brand> <Link to={"/"} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faTruckFast} /> E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {insideProduct && <Nav.Item>
              <input onChange={e=>dispatch(searchProduct(e.target.value))} type="text" className='form-control' placeholder='search your product' />
            </Nav.Item>}
            <Link to={"/Wishlist"} className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faHeart} className='btn btn-danger me-2' />WishList <Badge pill bg="secondary">{userWishlist?.length}</Badge></Link>

            <Link to={"/Cart"} className='text-light text-decoration-none fw-bold ms-5'><FontAwesomeIcon icon={faCartShopping} className='btn btn-success me-2' />Cart <Badge pill bg="secondary">{userCart?.length}</Badge></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

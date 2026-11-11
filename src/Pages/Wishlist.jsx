import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import Header from '../Components/Header'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import Swal from 'sweetalert2';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const userWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()

  const handleCart = (product) => {
    const existingItem = userCart?.find(item => item?.id == product?.id)
    dispatch(addToCart(product))
    dispatch(removeWishlistItem(product.id))
    Swal.fire({
      title: "success",
      text: existingItem ? `${existingItem.title} Quantity incremented` : "product added to your cart",
      icon: "success",
      confirmButtonText: "ok"
    })
  }

  return (
    <>
      <Header />
      <div className='container my-5'>
        {
          userWishlist?.length > 0 ?
            <>
              <h1 className='pt-5 text-primary fw-bold my-5'>User'S WishList</h1>
              <div className='row pt-5'>
                {
                  userWishlist?.map(item => (
                    <div className='col-3'>
                      {/* cards */}
                      <Card >
                        <Card.Img style={{ height: '250px' }} variant="top" src={item?.thumbnail} />
                        <Card.Body className='text-center'>
                          <Card.Title> {item?.title}</Card.Title>
                          <div className='d-flex justify-content-evenly'>
                            <button onClick={() => dispatch(removeWishlistItem(item?.id))} className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                            <button onClick={()=>handleCart(item)} className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus} /></button>

                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <img className='img-fluid' src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" />
              <h1>Your Wishlist is Empty </h1>
              <Link to={'/'} className='btn btn-primary'>Add more</Link>
            </div>
        }
      </div>
    </>
  )
}

export default Wishlist

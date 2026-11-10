import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Components/Header'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import Swal from 'sweetalert2';

function View() {

  const {id}=useParams()
  // console.log(id);
  const {allProducts}=useSelector(state=>state.productReducer)
  const [product,setProduct] = useState([])
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  console.log(userWishlist);
  
  useEffect(()=>{
    setProduct(allProducts?.find(item=>item.id==id))
  },[])
  // console.log(product);

  const handleWishlist = () =>{
    const existingItem = userWishlist?.find(item=>item?.id==product?.id)
    if(existingItem){
      Swal.fire({
        title:"sorry",
        text:"product already in your wishlist",
        icon:"error",
        confirmButtonText:"ok"
      })
    }else{
      dispatch(addToWishlist(product))
    }
  }
  
  

  return (
   <>
      <Header/>
      <div className='container my-5 pt-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <img style={{ width: '300px' }} className='img-fluid mt-3' src={product?.thumbnail} alt="product" />
            <div className='d-flex justify-content-center gap-5 mt-n5'>
              <button onClick={handleWishlist}  className='btn btn-success rounded'>Add To Wishlist</button>
              <button className='btn btn-primary rounded'>Add To Cart</button>
            </div>
          </div>
          <div className='col-lg-6'>
            <h3 className='fw-bold'>{product?.title} </h3>
            <h2 className='fw-bold'> $ :{product?.price}</h2>
            <h4 className='fw-bold'>Brand: {product?.brand}</h4>
            <h4 className='fw-bold'> Category : {product?.category} </h4>
            <h4 className='fw-bold'>Description :{product?.description}</h4>
            <h5 className='fw-bold'>Client Reviews :</h5>

          {  
          product?.reviews?.map(item=>(
            <div className='border rounded p-2 shadow my-5'>
              <p><span className='fw-bolder'>Name : {item?.reviwerName} </span> {item?.comment}</p>
              <p> Rating : {item?.rating} <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
            </div>
            ))
            }
          </div>
        </div>  
      </div>
   </>
  )
}

export default View

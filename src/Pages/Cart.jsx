import { Link } from "react-router-dom"
import Header from '../Components/Header'
import { useDispatch, useSelector } from "react-redux"
import { decrementCart, emptyCart, incrementCart, removeCartItem } from "../redux/slices/cartSlice"
import { useEffect, useState } from "react"

function Cart() {
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const [cartTotal,setCartTotal] = useState(0)

  useEffect(()=>{
    setCartTotal(userCart?.reduce((accum,curr)=>accum+curr.totalprice,0))
  },[userCart])

  const handleCartDecrement = (product)=>{
    if(product.quantity>1){
      dispatch(decrementCart(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }
  return (
    <>
      <Header />
      {
        userCart?.length > 0 ?
          <div className='container my-5'>
            <h1 className='pt-5 text-primary fw-bold my-5'>User'S Cart</h1>
            <div className='row'>
              <div className='col-lg-8 border shadow'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>...</th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                    userCart.map((item,index)=>(
                       <tr key={item?.id}>
                      <td>{index+1}</td>
                      <td> {item?.title}</td>
                      <td><img width={"50px"} height={"50px"} src={item?.thumbnail} alt="no image" /></td>
                      <td>
                        <div className='d-flex'>
                          <button onClick={()=>{handleCartDecrement(item)}}  className='btn fs-1'>-</button>
                          <input style={{ width: '40px' }} value={item?.quantity} type="text" className='form-control' readOnly />
                          <button onClick={()=>{dispatch(incrementCart(item?.id))}} className='btn fs-1'>+</button>
                        </div>
                      </td>
                      <td> {item?.totalprice}</td>
                      <td onClick={()=>dispatch(removeCartItem(item?.id))} className='text-danger fs-1 fw-bold'>x</td>
                    </tr>
                    ))
                   }
                  </tbody>
                </table>
                <div className='float-end p-3'>
                  <button onClick={()=>dispatch(emptyCart())} className="btn btn-danger rounded">Empty Cart</button>
                  <Link to={"/"} className="btn btn-info ms-5 rounded">Shop More</Link>
                </div>
              </div>
              <div className='col-lg-4 '>
                <div className="border shadow p-5 rounded text-center">
                  <h3>Total Amount : <span className="text-danger">$ {cartTotal} </span></h3>
                  <hr />
                  <button className="btn btn-success w-75">CheckOut</button>

                </div>
              </div>
            </div>
          </div>
          :

          //empty cart
          <div className='d-flex justify-content-center align-items-center flex-column m-4'>
            <img className='img-fluid' src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" />
            <h1>Your Cart is Empty </h1>
            <Link to={'/'} className='btn btn-primary'>Add more</Link>
          </div>
      }
    </>
  )
}

export default Cart

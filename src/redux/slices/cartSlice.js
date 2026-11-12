import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.id == action.payload.id)
            if (existingItem) {
                existingItem.quantity += 1
                existingItem.totalprice = existingItem.quantity * existingItem.price
                const remainingItem=state?.filter(item=>item.id!=existingItem.id)
                state=[...remainingItem,existingItem]
            } else {
                state.push({ ...action.payload, quantity: 1, totalprice: action.payload.price })
            }
        },
        //remove cart item
        removeCartItem:(state,action)=>{
         return   state.filter(item=>item.id!=action.payload)
        },

        incrementCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            const remainingProduct = state.filter(item=>item.id!=action.payload)
            existingProduct.quantity += 1
            existingProduct.totalprice = existingProduct.quantity * existingProduct.price
            state = [...remainingProduct,existingProduct] 
        },
        decrementCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload)
            const remainingProduct = state.filter(item=>item.id!=action.payload)
            existingProduct.quantity -= 1
            existingProduct.totalprice = existingProduct.quantity * existingProduct.price
            state = [...remainingProduct,existingProduct] 
        },
        emptyCart:(state)=>{
            return[]
        }
    }
})

 export const {addToCart,removeCartItem,incrementCart,decrementCart,emptyCart} =cartSlice.actions
 export default cartSlice.reducer 

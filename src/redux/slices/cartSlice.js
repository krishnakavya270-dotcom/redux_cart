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
        }
    }
})

 export const {addToCart} =cartSlice.actions
 export default cartSlice.reducer 


//  removeCartItem:(state,action)=>{
//             return state.filter(item=>item.id!=action.payload)
//         }
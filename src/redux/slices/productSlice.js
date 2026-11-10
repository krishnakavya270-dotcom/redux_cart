import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export const getAllproducts=createAsyncThunk("products/getAllproducts",async()=>{
    const result=await axios.get("https://dummyjson.com/products")
    console.log(result.data.products);
    
    return result.data.products
})
const productSlice=createSlice({
    name:"products",
    initialState:{
        loading:true,
        allProducts:[],
        dummyAllProducts:[],
        error:""
    },
    reducers:{
        //define only synchornous actions
        searchProduct:(state,action)=>{
            state.allProducts=state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }

    },extraReducers:(builder)=>{
        builder.addCase(getAllproducts.fulfilled,(state,action)=>{
            state.loading=false
            state.allProducts=action.payload
            state.dummyAllProducts=action.payload
            state.error=""
        })
         builder.addCase(getAllproducts.pending,(state,action)=>{
            state.loading=true
            state.allProducts=[]
            state.dummyAllProducts=action.payload
            state.error=""
        })
          builder.addCase(getAllproducts.rejected,(state,action)=>{
            state.loading=false
            state.allProducts=[]
            state.dummyAllProducts=action.payload
            state.error="API Call Failed"
        })
    }
})

export const {searchProduct}=productSlice.actions

export default productSlice.reducer
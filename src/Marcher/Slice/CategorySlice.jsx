import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchCategory = createAsyncThunk("fetcjCategory/category",async()=>{
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json()
    return data
})
const SliceCategory = createSlice({
    initialState:[],
    name:"SliceCategory",
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(fetchCategory.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})
export const {} = SliceCategory.actions
export default SliceCategory.reducer
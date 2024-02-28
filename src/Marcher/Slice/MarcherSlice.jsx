import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetcheMarcher = createAsyncThunk("Marcher/fetchMarcher",async ()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
})
const MarcherSlice = createSlice({
    initialState:[],
    name:"MarcherSlice",
    reducers:{},
    extraReducers:(build)=>{
        build.addCase(fetcheMarcher.fulfilled,(state,action)=>{
            return action.payload
        })
    },
})  
export const {} = MarcherSlice.actions;
export default MarcherSlice.reducer;

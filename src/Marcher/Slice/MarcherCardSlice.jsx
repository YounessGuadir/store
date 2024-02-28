import { createSlice } from "@reduxjs/toolkit";


const MarcherCardSlice = createSlice({
    initialState :[],
    name:"MarcherCard",
    reducers:{
        AddMarcher:(state,action)=>{
            // state.push(action.payload)
            const findMarcher = state.find((p)=>p.id ===parseInt(action.payload.id))
            if(findMarcher){
                findMarcher.quantity+=1
            }
            else {
                const MarcherColon = {...action.payload,quantity:1}
                state.push(MarcherColon)
            }
        },
        deleteMarcher:(state,action)=>{
            return state.filter((p)=> p.id!==parseInt(action.payload.id))

        },
        resetMarcher:()=>{
            return []
        }
    }
})
export const {AddMarcher,deleteMarcher,resetMarcher} = MarcherCardSlice.actions
export default MarcherCardSlice.reducer;
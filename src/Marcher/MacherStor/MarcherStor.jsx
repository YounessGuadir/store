import { configureStore } from "@reduxjs/toolkit";
import MarcherSlice from "../Slice/MarcherSlice";
import MarcherCardSlice from "../Slice/MarcherCardSlice";
import SliceCategory from "../Slice/CategorySlice";

const StorMarcher = configureStore({
    reducer:{
        Marcher:MarcherSlice,
        MarcherCard:MarcherCardSlice,
        category:SliceCategory
    }
})
export default StorMarcher
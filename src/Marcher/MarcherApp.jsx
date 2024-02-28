import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Marcher from "./Marcher";
import MarcherCard from "./MarcherCard";
import { useSelector } from "react-redux";
import MarcherParams from "./MarcherParams";
import NavMarcher from "./navMarcher";

export default function MarcherApp() {
    const selector = useSelector((state)=>state.MarcherCard.length)//fixed-top
    console.log(selector)
    return <>
    <BrowserRouter>
    <NavMarcher/>
    <Routes>
        <Route path={'/marcher'} element={<Marcher/>}/>
        <Route path={'/marcher/card'} element={<MarcherCard/>}/>
        <Route path={'/marcher/:id'} element={<MarcherParams/>}/>
    </Routes>
    </BrowserRouter>
    </>
}
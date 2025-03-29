
import Home from "@/Pages/Home";
import { Route,  Routes } from "react-router-dom";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default Routing;
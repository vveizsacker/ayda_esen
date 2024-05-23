import { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
function PrivateRoutes(){
    
    const[token,setToken] = useState({})
    const navigator = useNavigate()
    
    useEffect(()=>
    {
        const _token = localStorage.getItem("token");
        setToken(JSON.parse(_token));
        navigator("/manage")
    },[])

    return(
        token ? <Outlet/> : <Navigate to="/"/>
    )
}
export default PrivateRoutes;
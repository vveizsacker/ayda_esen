import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar()
{
  const [token,setToken] = useState();

  function Disconnect()
  {
    localStorage.removeItem("token")
    location.reload()
  }
  useEffect(()=>
  {
    setToken(JSON.parse(localStorage.getItem("token")));
  },[])

  return(
    <nav className="p-4 border-0 text-white bg-red-500 rounded-xl m-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-2xl capitalize">admin</h1>
      {
        token?(
          <div onClick={Disconnect}>deconnecter</div>
        ):(
          <></>
        )
      }
    </nav>
  )
}
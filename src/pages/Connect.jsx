import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function Connect()
{
    const navigator = useNavigate();
    function _Connect(e)
    {
        const token = {token:"123123"}
        localStorage.setItem("token",JSON.stringify(token))
        e.preventDefault();
        location.reload()
    }

    
    useEffect(()=>
    {
        const _token = localStorage.getItem("token");
        if(_token)
        navigator("/manage")
    },[])
    return(
        <>
            <div className="flex flex-col h-full w-full items-center justify-center">
                
            <form action="" className="flex flex-col p-6 bg-white border-2 gap-3 m-6 w-3/6 rounded-xl" onSubmit={_Connect}>
                <h1 className="text-2xl font-bold">Connecter</h1>
                <h1>Nom d'Utilisateur</h1>
                <input type="text" placeholder="" className="p-3 border-2 rounded-xl" />
                <h1>Mot de Passe</h1>
                <input type="password" placeholder="" className="p-3 border-2 rounded-xl" />
                <p className="flex gap-2 items-center p-3"><input type="checkbox" name="" id="" /> stay logged in</p>
                <button className="bg-red-500 text-white p-3 rounded-xl">se Connecter</button>
            </form>
            </div>
        </>
    )
}

import { useState,useEffect } from 'react';
//import  BasicModal  from './Modal';
import { Link,Outlet,NavLink } from 'react-router-dom'
import useAdminService from '../../services/useAdminService';

//import RenderList from '../UI/RenderList';
export default function ManagePartners() {

    /*
    const [data,setData] = useState();
    const admin = useAdminService();
    
    async function GetPartners()
    {
        const data = await admin.GetPartners();
        console.log(data)
        setData(data);
    }
    useEffect(()=>
    {
        GetPartners();
    },[])
    */

    return (
        <>

            <h1 hidden className='text-xl font-bold'>Gerer les Partenaires</h1>
            <nav className='flex gap-2 w-full' >
                
                <NavLink to="list" className={({isActive }) =>isActive ? "bg-red-500 p-4 text-white rounded-xl" : "bg-white p-4 rounded-xl"}>
                    <div >List des Partenaires</div>
                </NavLink>


                <NavLink to="add" className={({isActive }) =>isActive ? "bg-red-500 p-4 text-white rounded-xl" : "bg-white p-4 rounded-xl"}>
                    <div >Ajouter un partenaire</div>
                </NavLink>

            </nav>
            
            <div>
                <Outlet/>
                
            </div>
        

        </>
    );
}


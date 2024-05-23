
import { useContext, useEffect, useReducer, useState } from 'react';
import { Outlet,Link,NavLink } from 'react-router-dom';

import { MdDeliveryDining,MdHome, MdPerson } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { MdMessage } from "react-icons/md";



const list = [
    {
        icon:<MdHome size={"1.5rem"}/>,
        to:"dashboard",
        name:"Dashboard"
    },
    {
        icon:<MdPerson size={"1.5rem"}/>,
        to:"clients",
        name:"Gérer les clients"
    },
    {
        icon:<MdDeliveryDining size={"1.5rem"}/>,
        to:"drivers",
        name:"Gérer les livreurs"
    },
    {
        icon:<MdOutlineHandshake size={"1.5rem"}/>,
        to:"partners",
        name:"Gérer les partenaires"
    },
    {
        icon:<MdMessage size={"1.5rem"}/>,
        to:"messages",
        name:"Gérer les reclamations"
    },
    {
        icon:<MdMessage size={"1.5rem"}/>,
        to:"requests",
        name:"Gérer les demandes"
    },
]
export default function ClippedDrawer() {


  return (
    <>


    
    <div className='flex h-screen' >
        <div className='w-3/12 shadow-md rounded-xl h-full bg-white m-4 overflow-hidden'>
            <div className='flex flex-col'>
                {
                    list&&list.map(e=>(
                        <NavLink to={e.to} className={({isActive }) =>isActive ? "bg-red-500 text-white" : "bg-white"}>
                            <div className='p-3 flex items-center gap-2'>
                                <div>
                                    {e.icon}
                                </div>
                                <h1 className=''>{e.name}</h1>
                            </div>
                        </NavLink>

                    ))
                }

            </div>
        </div>

        <section className='flex flex-col w-10/12 p-4 gap-2'>      
            <Outlet/>
        </section>
    </div>
    </>
  );
}

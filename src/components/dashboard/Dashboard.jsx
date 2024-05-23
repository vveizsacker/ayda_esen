import { useEffect, useState } from "react";
import useAdminService from "../../services/useAdminService"



export default function Dashboard()
{

    const manager = useAdminService();
    const [userCount,setUserCount] = useState(0)
    const [messageCount,setMessageCount] = useState(0)
    const [driverCount,setDriverCount] = useState(0)
    const [partnerCount,setPartnerCount] = useState(0)

    async function getUsers()
    {
        const users = await manager.GetUsers()
        const partners = await manager.GetPartners()
        const drivers = await manager.GetDrivers()
        const messages = await manager.GetSupportMessages()
        
        setDriverCount(drivers.length)
        setPartnerCount(partners.length)
        setUserCount(users.length)
        setMessageCount(messages.length)

    }
    useEffect(()=>
    {
        getUsers();
    },[])
    return(
        <>
            <header className='flex gap-2'>
                <div className='p-5 flex flex-col gap-2 bg-white border-2 rounded-xl w-3/12'>
                    <div className='flex justify-between items-center'>
                        <div className='text-xl'>Livreures</div>
                        
                    </div>
                    <div className='text-xl font-bold'>{driverCount}</div>
                </div>
                <div className='p-5 flex flex-col gap-2 bg-white border-2 rounded-xl w-3/12'>
                    <div className='flex justify-between items-center'>
                        <div className='text-xl'>Partenaires</div>
                        
                    </div>
                    <div className='text-xl font-bold'>{partnerCount}</div>
                </div>
                <div className='p-5 flex flex-col gap-2 bg-white border-2 rounded-xl w-3/12'>
                    <div className='flex justify-between items-center'>
                        <div className='text-xl'>Clients</div>
                        
                    </div>
                    <div className='text-xl font-bold'>{userCount}</div>
                </div>
                <div className='p-5 flex flex-col gap-2 bg-white border-2 rounded-xl w-3/12'>
                    <div className='flex justify-between items-center'>
                        <div className='text-xl'>Reclamations</div>
                        
                    </div>
                    <div className='text-xl font-bold'>{messageCount}</div>
                </div>

            </header>
        </>
    )
}
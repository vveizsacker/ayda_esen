import axios from "axios";

export default function useAdminService()
{
    const URL = "http://localhost:8085/api/v1/auth";

    async function GetUsers()
    {
        const response = await axios.get(URL+"/users");
        const data = await response.data;
        return data;
    }
    
    async function GetUserData(email)
    {
        const response = await axios.get(URL+"/user"+"/"+email);
        const data = await response.data;
        return data;
        
    }
    async function GetDrivers()
    {
        const response = await axios.get(URL+"/drivers");
        console.log(response)
        const data = await response.data;
        return data;
    }
    async function GetDriverData(email)
    {
        const response = await axios.get(URL+"/driver"+"/"+email);
        const data = await response.data;
        return data;
    }
    
    async function GetSupportMessages()
    {
        const response = await axios.get(URL+"/support/messages/all");
        const data = await response.data;
        return data;
    }

    async function GetPartners()
    {
        const response = await axios.get(URL+"/partners");
        const data = await response.data;
        return data;
    }
    async function GetPartnerData(email)
    {
        const response = await axios.get(URL+"/partner"+"/"+email);
        const data = await response.data;
        return data;
    }

    return({URL,GetUsers,GetUserData,GetDrivers,GetDriverData,GetPartnerData,GetPartners,GetSupportMessages})
}
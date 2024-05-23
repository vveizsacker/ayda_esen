import "@styles/App.css"

import Home from "@pages/Home"
import Connect from "@pages/Connect"

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import PrivateRoutes from "@components/PrivateRoutes"


import Navbar from "./components/UI/Navbar"
import Dashboard from "./components/dashboard/Dashboard"
import List from "./components/manage-partners/List"
import Add from "./components/manage-partners/Add"

import ManagePartners from "./components/manage-partners/ManagePartners"
import ManageClients from "./components/manage-clients/ManageClients"
import ManageDrivers from "./components/manage-drivers/ManageDrivers"
import ManageMessages from "./components/manage-messages/ManageMessages"
import ManageRequests from "./components/manage-requests/ManageRequests"
import { SnackBarContextProvider } from "./hooks/useSnackBar"

function App(){
	return(
		<>			
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"/>
			{/*}

            {*/}

            <SnackBarContextProvider>   

                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Connect/>} />

                        <Route element={<PrivateRoutes/>}>
                            <Route path="manage" element={<Home/>} >
                                <Route path="dashboard" element={<Dashboard/>} />	
                                
                                <Route path="reclamations" element={<Dashboard/>} />	
                                
                                <Route path="partners" element={<ManagePartners/>} >
                                    <Route path="list" element={<List/>} />	
                                    <Route path="add"  element={<Add/>}/>	
                                </Route>

                                <Route path="clients" element={<ManageClients/>} />	
                                <Route path="drivers" element={<ManageDrivers/>} />	
                                <Route path="messages" element={<ManageMessages/>} />	
                                <Route path="requests" element={<ManageRequests/>} />	
                            </Route>
                        </Route>
                    </Routes>

                </Router>
            </SnackBarContextProvider>
		</>
	)
}
export default App
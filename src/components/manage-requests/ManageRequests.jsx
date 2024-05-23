import { useContext, useEffect, useState } from "react";
import { SnackBarContext } from '../../hooks/useSnackBar';

import useAdminService from "../../services/useAdminService";
import { Modal, SnackbarContent } from "@mui/material";
import axios from "axios";

import Alert from "../UI/Alert"

export default function ManageRequests() {
	const [data,setData] = useState();
	const [open,setOpen] = useState(false);

	const [selected,setSelected] = useState({});
	const [formData,setFormData] = useState({});

  const {ShowMessage} = useContext(SnackBarContext);


	const admin = useAdminService();
	const url = admin.URL;

  function DeleteMessage()
  {
    ShowMessage("Demande supprimé avec succès","green",3)
    setOpen(false)
  }
  function AcceptMessage()
  {
    ShowMessage("Demande accepter avec succès","green",3)
    setOpen(false)
  }

	async function GetMessages()
	{
        const messages = await admin.GetSupportMessages();
        console.log(messages);
		    setData(messages);
        
        const nom = "barg";
        const prenom = "jawher";
        const email = "bjawher@gmail.com"
        const numTel = "27665562"
        const password = "123123123"
        const adresse = "123 123 123 street"
        const role = "PARTENAIRE"
        // Fields specific to Partenaire
        const nomRestaurant = "dude food";
        const specialite = "burger";
        const imageRestaurant ="";
        const adresseRestaurant ="";
        const tempsOuverture= "";
        const tempsFermeture="";
        // Fields specific to Livreur
        const vehicule ="";
        const statut ="";

        const request = {nom,prenom,email,numTel,password,adresse,role,nomRestaurant,specialite,imageRestaurant,adresseRestaurant,tempsOuverture,tempsFermeture}
        const response = await axios.post(url+"/register/partner",request);
        console.log(response)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });

      };
	useEffect(()=>
	{
		GetMessages();
	},[])

  const [alert,setAlert] = useState(false);

	return (
		<div>
      <Alert
        confirm={DeleteMessage}
        open={alert}
        setOpen={setAlert}
        message={"êtes-vous sûr de vouloir supprimer l'utilisateur "+selected.email}
      />

		<Modal
      className="flex justify-center items-center"
			open={open}
			onClose={()=>setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
				<div className="bg-white w-3/6 h-4/5 rounded-xl flex flex-col">

					<div className="border-b p-4 flex items-center justify-between h-1/6">
						<div>Demande de partenaire {selected.email}</div>
						<button onClick={()=>setOpen(false)}>X</button>
					</div>

					<div className="flex flex-col gap-1 h-5/6" >

                        <div className="flex h-full overflow-y-scroll p-4">
                            <div className="w-4/12">
                                
                                <div className="p-2">Type De Demande</div>
                                <div className="p-2">Nom</div>
                                <div className="p-2">Created At</div>
                                <div className="p-2">Email</div>
                                
                            </div>
                            <div className="w-8/12">
                                <div className="p-2">Demande de Parteneria</div>
                                <div className="p-2">{selected.name}</div>
                                <div className="p-2">{new Date(selected.createdAt).toLocaleDateString()}</div>
                                <div className="p-2">{selected.email}</div>
                            </div>
                        </div>
                        
                        <div className="flex gap-3 mt-auto p-4">
                            <button className="bg-green-500 p-3 text-white rounded-xl w-full" onClick={AcceptMessage}>Accepter</button>
                            <button className="border-2 p-3 bg-red-500 text-white rounded-xl w-full">Refuser</button>
                            <button className="border-red-500 border-2 p-3 text-red-500 rounded-xl w-full" onClick={()=>setAlert(true)}>Supprimer</button>
                        </div>

					</div>
				</div>
				
		</Modal>


        <div className='w-full flex flex-col gap-2 bg-white rounded-2xl border-2 overflow-hidden p-4'>
        <h1 className="text-xl font-bold">List Des Demandes</h1>
          <div className="w-full flex gap-2 border-b-2 p-3 bg-white justify-between capitalize font-bold ">
            <div className='w-1/12'>id</div>
            <div className='w-1/12'>nom</div>
            <div className='w-1/12'>date</div>
            <div className='w-2/12'>type de demande</div>
            <div className='w-2/12'>email</div>
          </div>
          {
			data?(data.map(e=>(
				
				<div className="flex gap-3 items-center p-2 justify-between" onClick={()=>
				{
					setSelected(e)
					setFormData(e)
					setOpen(true)
				}}>
					
					<div className="w-1/12">{e.id}</div>
					<div className="w-1/12">{e.name}</div>
					<div className="w-1/12">{new Date(e.createdAt).toLocaleDateString()}</div>
					<div className="w-2/12">partenria</div>
					<div className="w-2/12">{e.email}</div>
					
	
				</div>
			
			))
          ):(
            <>
              <h1>No Drivers To Show</h1>
            </>
          )
		}
        </div>

    </div>

	);
}

import { useContext, useEffect, useState } from "react";
import useAdminService from "../../services/useAdminService";

import { Modal } from "@mui/material";
import axios from "axios";
import RenderList from "../UI/RenderList";

import {SnackBarContext} from "../../hooks/useSnackBar";
import Alert
 from "../UI/Alert";
export default function List() {
	const [data,setData] = useState();
	const [open,setOpen] = useState(false);

	const [selected,setSelected] = useState({});
	const [formData,setFormData] = useState({});

    const header = [
        {
            size:"20%",
            text:"username",
            key:"username"
        },
        {
            size:"10%",
            text:"prenom",
            key:"prenom"
        },
        {
            size:"10%",
            text:"nom",
            key:"nom"
        },
        {
            size:"30%",
            text:"email",
            key:"email"
        },
        {
            size:"20%",
            text:"adresse",
            key:"adresse"
        },
        {
            size:"10%",
            text:"role",
            key:"role"
        },
    ]
	const admin = useAdminService();
	const url = admin.URL;

	async function GetPartners()
	{
		const data = await admin.GetPartners();
		console.log(data)
		setData(data);
	}

	async function DeletePartner()
	{
		//e.preventDefault();
		setOpen(false);
		ShowMessage("le partenaire a ete supprimer avec succès","green",3);
		//const response = await axios.delete(url+"/partner/"+selected.email);
		//console.log(response)
	}
	const{ShowMessage} = useContext(SnackBarContext)
	async function UpdatePartner(e)
	{
		e.preventDefault();
		setOpen(false);
		ShowMessage("les données de l'utilisateur ont été mises à jour avec succès","green",3);
		/*
		const response = await axios.put(url+"/partner/"+selected.email);
		console.log(response)
		*/
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
		GetPartners();
	},[])

	const[alert,setAlert] = useState(false);

	return (
		<div>
		<Alert
			confirm={DeletePartner}
			open={alert}
			setOpen={setAlert}
			message={"êtes-vous sûr de vouloir supprimer le partenaire "+selected.email}
		/>
		<Modal
		            className="flex justify-center items-center"

			open={open}
			onClose={()=>setOpen(false)}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
				
				<div className="bg-white w-3/6 h-4/5 rounded-xl">

					<div className="border-b p-4 flex items-center justify-between h-1/6">
						<div>Modifier {selected.username}</div>
						<button onClick={()=>setOpen(false)}>X</button>
					</div>

					<form action="" className="flex flex-col gap-2 p-4 h-5/6" onSubmit={UpdatePartner} onChange={handleChange}>
						<input type="text" className="border-2 p-2 rounded-xl" name="username" placeholder="username" value={formData.username} />
						<p className="text-red-600">Email already exists</p>
						<input type="text" className="border-2 p-2 rounded-xl" name="nom" placeholder="nom" value={formData.nom} />
						<input type="text" className="border-2 p-2 rounded-xl" name="prenom" placeholder="prenom" value={formData.prenom} />
						<input type="text" className="border-2 p-2 rounded-xl" name="adresse" placeholder="adresse" value={formData.adresse} />
						<input type="text" className="border-2 p-2 rounded-xl" name="email" placeholder="email" value={formData.email} />
						<input type="text" className="border-2 p-2 rounded-xl" name="numTel" placeholder="numTel" value={formData.numTel} />

						<div className="flex mt-auto w-full gap-4"
						>
							<button className="bg-blue-500 text-white p-4 rounded-xl w-full " >Sauvgarder</button>
							<button type="button" className="border-2 border-red-500 text-red-500 p-4 rounded-xl w-full" onClick={()=>setAlert(true)}>Supprimer</button>
						</div>
					</form>
				</div>
				
		</Modal>


		<RenderList
			title={"partenaires"}
			header={header}
			data={data}
			setOpen={setOpen}
			setFormData={setFormData}
			setSelected={setSelected}
		/>
    </div>

	);
}

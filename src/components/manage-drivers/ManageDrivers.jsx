import { useEffect, useState } from "react";
import useAdminService from "../../services/useAdminService";

import { Modal } from "@mui/material";
import axios from "axios";
import RenderList from "../UI/RenderList";

export default function ManageDrivers() {
	const [data,setData] = useState();
	const [open,setOpen] = useState(false);

	const [selected,setSelected] = useState({});
	const [formData,setFormData] = useState({});


	const admin = useAdminService();
	const url = admin.URL;


	const header = [
		{text:"username",key:"username",size:"10%"},
		{text:"nom",key:"nom",size:"10%"},
		{text:"prenom",key:"prenom",size:"10%"},
		{text:"adresse",key:"adresse",size:"20%"},
		{text:"email",key:"email",size:"20%"},
		{text:"telephone",key:"numTel",size:"10%"},
	]

	async function GetDrivers()
	{
		const drivers = await admin.GetDrivers();
        console.log(drivers);
		setData(drivers);
	}

	async function DeleteDriver()
	{
		//e.preventDefault();
		setOpen(false);
		const response = await axios.delete(url+"/driver/"+selected.email);
		console.log(response)
	}
	async function UpdateDriver(e)
	{
		e.preventDefault();
		setOpen(false);
		const response = await axios.put(url+"/driver/"+selected.email);
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
		GetDrivers();
	},[])

	return (
		<div>

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

					<form action="" className="flex flex-col gap-2 p-4  h-5/6" onSubmit={UpdateDriver} onChange={handleChange}>
						<input type="text" className="border-2 p-2 rounded-xl" name="username" placeholder="username" value={formData.username} />
						<input type="text" className="border-2 p-2 rounded-xl" name="nom" placeholder="nom" value={formData.nom} />
						<input type="text" className="border-2 p-2 rounded-xl" name="prenom" placeholder="prenom" value={formData.prenom} />
						<input type="text" className="border-2 p-2 rounded-xl" name="adresse" placeholder="adresse" value={formData.adresse} />
						<input type="text" className="border-2 p-2 rounded-xl" name="email" placeholder="email" value={formData.email} />
						<input type="text" className="border-2 p-2 rounded-xl" name="numTel" placeholder="numTel" value={formData.numTel} />

						<div className="flex mt-auto w-full gap-4"
						>
							<button className="bg-blue-500 text-white p-4 rounded-xl w-full ">Sauvgarder</button>
							<button className="border-2 border-red-500 text-red-500 p-4 rounded-xl w-full" onClick={DeleteDriver}>Supprimer</button>
						</div>
					</form>
				</div>
				
		</Modal>


		<RenderList
			header={header}
			data={data}
			title={"livereurs"}
		/>

    </div>

	);
}

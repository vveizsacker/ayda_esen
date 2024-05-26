import { useContext, useEffect, useState } from "react";
import useAdminService from "../../services/useAdminService";

import { Modal } from "@mui/material";
import axios from "axios";
import RenderList from "../UI/RenderList";
import { SnackBarContext } from "../../hooks/useSnackBar";
import Alert from "../UI/Alert";

export default function ManageMessages() {
	const [data,setData] = useState();
	const [open,setOpen] = useState(false);

	const [selected,setSelected] = useState({});
	const [formData,setFormData] = useState({});


	const admin = useAdminService();
	const url = admin.URL;


	const header = [
		{
			text:"ID",
			size:"10%",
			key:"id"
		},
		{
			text:"nom",
			size:"10%",
			key:"name"
		},
		{
			text:"date de creation",
			size:"30%",
			key:"createdAt"
		},
		{
			text:"type de problem",
			size:"20%",
			key:"type"
		},
		{
			text:"email",
			size:"30%",
			key:"email"
		},
	]

	const {ShowMessage} = useContext(SnackBarContext)

	async function GetMessages()
	{
		const messages = await admin.GetSupportMessages();
        console.log(messages);
		setData(messages);
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

	const[alert,setAlert] = useState(false);
	
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
						<div>Message de {selected.email}</div>
						<button onClick={()=>setOpen(false)}>X</button>
					</div>

					<div action="" className="flex flex-col gap-1 p-4  h-5/6"  >

                        <div className="flex w-6/12">
                            <div className="w-full">
                                <div className="p-2">id</div>
                                <div className="p-2">Nom</div>
                                <div className="p-2">Created At</div>
                                <div className="p-2">Type De Problem</div>
                                <div className="p-2">Email</div>
                                <div className="p-2">Message</div>
                                
                            </div>
                            <div className="w-8/12">
                                <div className="p-2">{selected.id}</div>
                                <div className="p-2">{selected.name}</div>
                                <div className="p-2">{new Date(selected.createdAt).toLocaleDateString()}</div>
                                <div className="p-2">{selected.type}</div>
                                <div className="p-2">{selected.email}</div>
                            </div>
                        </div>
                        <div className="w-full h-full border-2 p-2 rounded-xl ">{selected.message}</div>
					</div>
				</div>
				
		</Modal>


		<RenderList 
			title={"reclamations"} 
			header={header} data={data}
			setSelected={setSelected} 
			setOpen={setOpen} 
			setFormData={setFormData}
		/>

    </div>

	);
}

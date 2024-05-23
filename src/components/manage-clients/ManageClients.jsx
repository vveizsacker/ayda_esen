
import axios from 'axios';
import useAdminService from '../../services/useAdminService';
import { useEffect, useState } from 'react';
import { Modal } from '@mui/material';
import RenderList from '../UI/RenderList';

export default function ManageClients() {
  
  const manager = useAdminService();
  const url = manager.URL;
  const [data,setData] = useState()
  const [selected,setSelected] = useState({});
  const [formData,setFormData] = useState({});
  const [open,setOpen] = useState(false)


	const header = [
		{text:"username",key:"username",size:"20%"},
		{text:"nom",key:"nom",size:"10%"},
		{text:"prenom",key:"prenom",size:"10%"},
		{text:"adresse",key:"adresse",size:"30%"},
		{text:"email",key:"email",size:"20%"},
		{text:"role",key:"role",size:"10%"},
	]

	async function UpdateUser(e)
	{
		e.preventDefault();
		setOpen(false);
		const response = await axios.put(url+"/user/"+selected.email);
		console.log(response)
	}
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });

      };

  async function getUsers()
  {
    const data = await manager.GetUsers();
    console.log(data)
    setData(data);
  }
  
  useEffect(()=>
  {
    getUsers();
  },[])
  return (
    <>
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

					<form action="" className="flex flex-col gap-2 p-4 h-5/6" onSubmit={UpdateUser} onChange={handleChange}>
						<input type="text" className="border-2 p-2 rounded-xl" name="username" placeholder="username" value={formData.username} />
						<input type="text" className="border-2 p-2 rounded-xl" name="prenom" placeholder="prenom" value={formData.prenom} />
						<input type="text" className="border-2 p-2 rounded-xl" name="nom" placeholder="nom" value={formData.nom} />
						<input type="text" className="border-2 p-2 rounded-xl" name="adresse" placeholder="adresse" value={formData.adresse} />
						<input type="text" className="border-2 p-2 rounded-xl" name="email" placeholder="email" value={formData.email} />

						<div className="flex mt-auto w-full gap-4"
						>
							<button className="bg-blue-500 text-white p-4 rounded-xl w-full ">Sauvgarder</button>
						</div>
					</form>
				</div>
				
		</Modal>

    <RenderList
      header={header}
      data={data}
      title={"clients"}
      setFormData={setFormData}
      setOpen={setOpen}
      setSelected={setSelected}
    />

    </>
  );
}


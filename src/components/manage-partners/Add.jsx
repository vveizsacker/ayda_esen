export default function Add()
{
    return(
        <div className="w-full h-full p-4 bg-white border-2 rounded-xl">
            <form action="" className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">Ajouter un partenaire</h1>
                    <button className="bg-red-500 p-3 rounded-xl text-white">Ajouter</button>

                </div>
                <input type="text" className="p-3  border-2 w-full rounded-xl" placeholder="Nom" />
                <input type="text" className="p-3  border-2 w-full rounded-xl" placeholder="Prenom" />
                <input type="text" className="p-3  border-2 w-full rounded-xl" placeholder="Email" />
                <input type="text" className="p-3  border-2 w-full rounded-xl" placeholder="Numero de Telephone" />
                <input type="text" className="p-3  border-2 w-full rounded-xl" placeholder="Adresse" />
            </form>
        </div>
    )
}
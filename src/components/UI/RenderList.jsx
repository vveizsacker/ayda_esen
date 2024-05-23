
export default function RenderList({title,header,data,setSelected,setFormData,setOpen})
{

    function checkType(data)
    {
        if(typeof(data) == "date")
        {
            
        }
    }

    //console.log(Object.keys(data[0]))
    return(
        <div className='w-full flex flex-col gap-2 bg-white rounded-2xl border-2 overflow-hidden p-4'>
            <h1 className="text-xl font-bold">List Des {title}</h1>
            <div className="w-full flex gap-2 border-b-2 p-3 bg-white  capitalize font-bold ">
            {
                header&&header.map(title=>(
                    <div style={{width:title.size}}>{title.text}</div>
                ))
            }

          </div>
            {
                data? (data.map(element=>(
                
                    <div className="w-full flex gap-2 p-3 " onClick={()=>{
                            
                            setSelected(element);
                            setFormData(element);
                            setOpen(true)
                        }}>
                            {
                                header.map(title=>
                                    (
                                        <div style={{width:title.size}}>
                                            {
                                                <>
                                                {
                                                    
                                                }
                                                    <div>{element[title.key]}</div>
                                                </>
                                            }
                                        </div>
                                    ))
                            }
                    </div>
                ))
            ):(
                <>
                <h1>No Data To Show</h1>
                </>
            )
            }
        </div>
    )
}
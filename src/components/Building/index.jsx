import { useNavigate } from "react-router-dom"
import { BuildingComponent } from "./style"

export const Building = ({name, carreras}) =>{
    const navigate = useNavigate();

    const handleClick = (name)=> navigate(`/building${name}`)

    return(
        <BuildingComponent onClick={()=>handleClick(name)} >
            <div className="name">
                <h2>{name}</h2>
            </div>
            <div className="carreras">
                {
                    carreras.map((carrera, i)=>(
                        <div key={i} className="carrera">
                            <p>{carrera.nameCarrera}</p>
                        </div>
                    ))
                }
            </div>
        </BuildingComponent>
    )
}
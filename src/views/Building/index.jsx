import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { ContextBuildings } from '../../context/buildings';
import { BuildingView } from "./style";

export const Building = () =>{
    const navigate = useNavigate();
    const { name } = useParams();
    const { buildings } = useContext(ContextBuildings);
    
    const [building, setBuilding]=useState({});

    useEffect(()=>{
        setBuilding(buildings.filter(building => building.name === name));
    }, [])
    
    const handleClick = (carrera) => navigate(`/schedule${carrera}`);
    
    return(
        <BuildingView>
            <h2>Edificio {name}</h2>
            <div className="carreras">
                <h3>Carreras</h3>
                    {building[0]?.carreras?.map((carrera, i)=>(
                        <div key={i} >
                            <h4>{carrera.nameCarrera}</h4>
                            <h5>Materias</h5>
                            <ul>
                                {
                                    carrera.materias.map((materia, i)=>(
                                        <li key={i} >{materia}</li>
                                    ))
                                }
                            </ul>
                            <h4>Profesores</h4>
                            <ul>
                                {
                                    carrera.profesores.map((profesor, i)=>(
                                        <li key={i}>{profesor}</li>
                                    ))
                                }
                            </ul>
                            <button onClick={()=>handleClick(carrera.nameCarrera)} >Crear Horario para {carrera.nameCarrera} </button>
                        </div>
                    ))}
            </div>

            <div className="salones">
                <h3>Salones</h3>
                <ul>
                    {building[0]?.salones?.map((salon, i)=>(
                        <li key={i} >{salon}</li>
                    ))}
                </ul>
            </div>
        </BuildingView>
    )
}
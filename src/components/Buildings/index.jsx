import { Building } from "../Building"
import { Button } from "../Buttons"
import { BuildingsList } from "./style"
import { useContext } from "react"
import { ContextBuildings } from "../../context/buildings"

export const Buildings = () => {

    const { buildings } = useContext(ContextBuildings);

    return(
        <>
            <h2>Buildings</h2>
            <Button small={true} >New Building</Button>
            <BuildingsList>
                {
                    buildings.map((building, i)=>(
                        <Building key={i} name={building.name} carreras={building.carreras} />
                    ))
                }
            </BuildingsList>
        </>
    )
}
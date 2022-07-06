import { Building } from "../Building"
import { BuildingsList } from "./style"

export const Buildings = () => {
    return(
        <>
            <h2>Buildings</h2>
            <button>New Building</button>
            <BuildingsList>
                <Building/>
            </BuildingsList>
        </>
    )
}